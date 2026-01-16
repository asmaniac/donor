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
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.trim() === '') {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured. Please add OPENAI_API_KEY to your .env file.' },
        { status: 500 }
      )
    }

    // Build detailed donation history for context
    const donationHistory = donorData.recentDonations.length > 0
      ? donorData.recentDonations.map((d, i) => 
          `${i + 1}. $${d.amount.toFixed(2)} on ${new Date(d.date).toLocaleDateString()} (${d.type})`
        ).join('\n')
      : 'No recent donations'

    const prompt = `You are analyzing donor activity for a nonprofit organization. 
Given the following anonymized donor data:
- Total gifts: ${donorData.totalGifts}
- Total amount: $${donorData.totalAmount.toFixed(2)}
- First gift date: ${donorData.firstGiftDate ? new Date(donorData.firstGiftDate).toLocaleDateString() : 'N/A'}
- Last gift date: ${donorData.lastGiftDate ? new Date(donorData.lastGiftDate).toLocaleDateString() : 'N/A'}
- Retention risk: ${donorData.retentionRisk}
- Status: ${donorData.status}
- Recent donation history:
${donationHistory}

Generate a concise, professional 3-4 sentence summary that:
1. Analyzes the giving pattern and consistency (frequency, amounts, trends)
2. Assesses the current engagement level and retention risk
3. Provides specific, actionable recommendations for donor retention

Use professional, concise language. Focus on actionable insights. Do not include any personal information.`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
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
        max_tokens: 300,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('OpenAI API error:', errorData)
      const errorMessage = errorData.error?.message || errorData.error?.code || 'AI service error'
      
      // Provide helpful error message for model access issues
      if (errorData.error?.code === 'model_not_found' || errorMessage.includes('does not have access')) {
        return NextResponse.json(
          { 
            error: `Model access issue: ${errorMessage}. Please check your OpenAI dashboard (https://platform.openai.com/settings/organization) to enable model access or upgrade your plan.` 
          },
          { status: response.status || 500 }
        )
      }
      
      return NextResponse.json(
        { error: `OpenAI API Error: ${errorMessage}` },
        { status: response.status || 500 }
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
