// Business logic for donor operations
import { prisma } from '../db'

/**
 * Get a list of donors with filtering and pagination
 */
export async function getDonors(params) {
  const { organizationId, page = 1, limit = 20, search, status, retentionRisk, sortBy = 'firstName', sortOrder = 'asc' } = params
  
  const skip = (page - 1) * limit
  
  // Build where clause
  const where = {
    organizationId,
    ...(status && { status }),
    ...(retentionRisk && { retentionRisk }),
    ...(search && {
      OR: [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        ...(search.includes('@') ? [{ email: { contains: search, mode: 'insensitive' } }] : [])
      ]
    })
  }
  
  // Build orderBy
  const validSortFields = ['firstName', 'lastName', 'totalAmount', 'lastGiftDate', 'createdAt']
  const safeSortBy = validSortFields.includes(sortBy) ? sortBy : 'firstName'
  const orderBy = {}
  orderBy[safeSortBy] = sortOrder
  
  // Query donors
  const donors = await prisma.donor.findMany({
    where,
    skip,
    take: limit,
    orderBy
  })
  
  const total = await prisma.donor.count({ where })
  
  return {
    donors,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit)
  }
}

/**
 * Create a new donor
 */
export async function createDonor(donorData, organizationId) {
  const donor = await prisma.donor.create({
    data: {
      ...donorData,
      organizationId
    }
  })
  
  return donor
}
