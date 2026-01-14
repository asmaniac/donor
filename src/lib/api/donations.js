// Business logic for donation operations
import { prisma } from '../db'

/**
 * Get a list of donations with filtering and pagination
 */
export async function getDonations(params) {
  const { organizationId, page = 1, limit = 20, donorId, sortBy = 'date', sortOrder = 'desc' } = params
  
  const skip = (page - 1) * limit
  
  // Build where clause
  const where = {
    donor: {
      organizationId
    },
    ...(donorId && { donorId })
  }
  
  // Build orderBy
  const validSortFields = ['date', 'amount', 'createdAt']
  const safeSortBy = validSortFields.includes(sortBy) ? sortBy : 'date'
  const orderBy = {}
  orderBy[safeSortBy] = sortOrder
  
  // Query donations with donor info
  const donations = await prisma.donation.findMany({
    where,
    skip,
    take: limit,
    orderBy,
    include: {
      donor: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true
        }
      },
      campaign: {
        select: {
          id: true,
          name: true
        }
      }
    }
  })
  
  const total = await prisma.donation.count({ where })
  
  return {
    donations,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit)
  }
}

/**
 * Create a new donation and update donor metrics
 */
export async function createDonation(donationData, organizationId) {
  // Verify donor belongs to organization
  const donor = await prisma.donor.findFirst({
    where: {
      id: donationData.donorId,
      organizationId
    }
  })

  if (!donor) {
    throw new Error('Donor not found')
  }

  // Create donation and update donor metrics in a transaction
  const result = await prisma.$transaction(async (tx) => {
    // Create donation
    const donation = await tx.donation.create({
      data: donationData,
      include: {
        donor: true,
        campaign: true
      }
    })

    // Calculate updated donor metrics
    const allDonations = await tx.donation.findMany({
      where: { donorId: donationData.donorId },
      orderBy: { date: 'asc' }
    })

    const totalGifts = allDonations.length
    const totalAmount = allDonations.reduce((sum, d) => sum + d.amount, 0)
    const firstGiftDate = allDonations[0]?.date || null
    const lastGiftDate = allDonations[allDonations.length - 1]?.date || null

    // Calculate retention risk
    let retentionRisk = 'UNKNOWN'
    if (totalGifts === 1) {
      const daysSinceGift = Math.floor((new Date() - new Date(lastGiftDate)) / (1000 * 60 * 60 * 24))
      if (daysSinceGift > 365) {
        retentionRisk = 'CRITICAL'
      } else if (daysSinceGift > 60) {
        retentionRisk = 'HIGH'
      } else {
        retentionRisk = 'MEDIUM'
      }
    } else if (totalGifts >= 2) {
      const daysSinceLastGift = Math.floor((new Date() - new Date(lastGiftDate)) / (1000 * 60 * 60 * 24))
      if (daysSinceLastGift > 365) {
        retentionRisk = 'CRITICAL'
      } else if (daysSinceLastGift > 180) {
        retentionRisk = 'HIGH'
      } else {
        retentionRisk = 'LOW'
      }
    }

    // Update donor metrics
    await tx.donor.update({
      where: { id: donationData.donorId },
      data: {
        totalGifts,
        totalAmount,
        firstGiftDate,
        lastGiftDate,
        retentionRisk
      }
    })

    return donation
  })

  return result
}
