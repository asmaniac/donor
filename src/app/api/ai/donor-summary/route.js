// AI API - Generate Donor Summary
import { NextResponse } from 'next/server'
import { getSessionUser } from '@/lib/session'
import { prisma } from '@/lib/db'

export async function POST(request) {
  try {
    const user = await getSessionUser()
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { donorId } = await request.json()

    if (!donorId) {
      return NextResponse.json(
        { error: 'Donor ID is required' },
        { status: 400 }
      )
    }

    // Fetch donor with donations
    const donor = await prisma.donor.findFirst({
      where: {
        id: donorId,
        organizationId: user.organizationId
      },
      include: {
        donations: {
          orderBy: { date: 'desc' },
          take: 10
        }
      }
    })

    if (!donor) {
      return NextResponse.json(
        { error: 'Donor not found' },
        { status: 404 }
      )
    }

    // Prepare anonymized data for AI
    const donorData = {
      totalGifts: donor.totalGifts,
      totalAmount: donor.totalAmount,
      firstGiftDate: donor.firstGiftDate,
      lastGiftDate: donor.lastGiftDate,
      retentionRisk: donor.retentionRisk,
      status: donor.status,
      recentDonations: donor.donations.map(d => ({
        amount: d.amount,
        date: d.date,
        type: d.type
      }))
    }

    // Call OpenAI API
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'AI service not configured' },
        { status: 500 }
      )
    }

    const prompt = `You are analyzing donor activity for a nonprofit organization. 
Given the following anonymized donor data:
- Total gifts: ${donorData.totalGifts}
- Total amount: $${donorData.totalAmount.toFixed(2)}
- First gift date: ${donorData.firstGiftDate ? new Date(donorData.firstGiftDate).toLocaleDateString() : 'N/A'}
- Last gift date: ${donorData.lastGiftDate ? new Date(donorData.lastGiftDate).toLocaleDateString() : 'N/A'}
- Retention risk: ${donorData.retentionRisk}
- Status: ${donorData.status}
- Recent donations: ${donorData.recentDonations.length} donation(s)

Generate a concise 3-4 sentence summary highlighting:
1. Giving pattern and consistency
2. Current engagement level
3. Recommended next steps for donor retention

Do not include any personal information. Use professional, concise language. Focus on actionable insights.`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that analyzes nonprofit donor data and provides actionable insights.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 200,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('OpenAI API error:', errorData)
      return NextResponse.json(
        { error: 'AI service error' },
        { status: 500 }
      )
    }

    const aiResponse = await response.json()
    const summary = aiResponse.choices[0]?.message?.content || 'Unable to generate summary'

    return NextResponse.json({
      summary,
      donorData: {
        totalGifts: donorData.totalGifts,
        totalAmount: donorData.totalAmount,
        retentionRisk: donorData.retentionRisk
      }
    })
  } catch (error) {
    console.error('AI summary error:', error)
    return NextResponse.json(
      { error: 'Failed to generate summary' },
      { status: 500 }
    )
  }
}
