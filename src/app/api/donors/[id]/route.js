// Donors API - Get Single Donor
import { NextResponse } from 'next/server'
import { getSessionUser } from '@/lib/session'
import { prisma } from '@/lib/db'

export async function GET(request, { params }) {
  try {
    const user = await getSessionUser()
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const donor = await prisma.donor.findFirst({
      where: {
        id: params.id,
        organizationId: user.organizationId
      }
    })

    if (!donor) {
      return NextResponse.json(
        { error: 'Donor not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(donor)
  } catch (error) {
    console.error('Donor GET error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch donor' },
      { status: 500 }
    )
  }
}
