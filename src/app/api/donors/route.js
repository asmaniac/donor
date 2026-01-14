// Donors API - List and Create
import { NextResponse } from 'next/server'
import { getSessionUser } from '@/lib/session'
import { getDonors, createDonor } from '@/lib/api/donors'
import { createDonorSchema, donorListQuerySchema } from '@/lib/validation/donor-schema'

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
      search: getParam('search'),
      status: getParam('status'),
      retentionRisk: getParam('retentionRisk'),
      sortBy: getParam('sortBy'),
      sortOrder: getParam('sortOrder')
    }

    // Validate query parameters
    const validatedParams = donorListQuerySchema.parse(queryParams)

    // Query donors
    const result = await getDonors({
      organizationId: user.organizationId,
      ...validatedParams
    })

    return NextResponse.json({
      donors: result.donors || [],
      total: result.total || 0,
      page: result.page || validatedParams.page || 1,
      limit: result.limit || validatedParams.limit || 20,
      totalPages: result.totalPages || Math.ceil((result.total || 0) / (result.limit || validatedParams.limit || 20))
    })
  } catch (error) {
    console.error('Donors GET error:', error)
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { 
          error: 'Invalid query parameters',
          message: 'The request parameters are invalid',
          details: error.errors || []
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch donors',
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
    const validatedData = createDonorSchema.parse(body)

    // Create donor in database
    const donor = await createDonor(validatedData, user.organizationId)

    return NextResponse.json(donor, { status: 201 })
  } catch (error) {
    console.error('Donors POST error:', error)
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { 
          error: 'Validation error', 
          message: 'Please check your input and try again',
          details: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to create donor',
        message: error.message || 'An unexpected error occurred'
      },
      { status: 500 }
    )
  }
}
