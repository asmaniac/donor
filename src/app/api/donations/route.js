// Donations API - List and Create
import { NextResponse } from 'next/server'
import { getSessionUser } from '@/lib/session'
import { getDonations, createDonation } from '@/lib/api/donations'
import { createDonationSchema, donationListQuerySchema } from '@/lib/validation/donation-schema'

export async function GET(request) {
  try {
    const user = await getSessionUser()
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Parse query parameters
    const { searchParams } = new URL(request.url)
    
    const getParam = (key) => {
      const value = searchParams.get(key)
      return value === null || value === '' ? undefined : value
    }
    
    const queryParams = {
      page: getParam('page'),
      limit: getParam('limit'),
      donorId: getParam('donorId'),
      sortBy: getParam('sortBy'),
      sortOrder: getParam('sortOrder')
    }

    // Validate query parameters
    const validatedParams = donationListQuerySchema.parse(queryParams)

    // Query donations
    const result = await getDonations({
      organizationId: user.organizationId,
      ...validatedParams
    })

    return NextResponse.json({
      donations: result.donations || [],
      total: result.total || 0,
      page: result.page || validatedParams.page || 1,
      limit: result.limit || validatedParams.limit || 20,
      totalPages: result.totalPages || Math.ceil((result.total || 0) / (result.limit || validatedParams.limit || 20))
    })
  } catch (error) {
    console.error('Donations GET error:', error)
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { 
          error: 'Invalid query parameters',
          details: error.errors || []
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch donations',
        message: error.message || 'An unexpected error occurred'
      },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const user = await getSessionUser()
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check user permissions (ADMIN, STAFF)
    if (user.role !== 'ADMIN' && user.role !== 'STAFF') {
      return NextResponse.json(
        { error: 'Forbidden - Insufficient permissions' },
        { status: 403 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = createDonationSchema.parse(body)

    // Create donation in database
    const donation = await createDonation(validatedData, user.organizationId)

    return NextResponse.json(donation, { status: 201 })
  } catch (error) {
    console.error('Donations POST error:', error)
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { 
          error: 'Validation error', 
          details: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to create donation',
        message: error.message || 'An unexpected error occurred'
      },
      { status: 500 }
    )
  }
}
