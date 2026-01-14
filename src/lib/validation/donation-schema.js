// Zod validation schemas for donation operations
import { z } from 'zod'

const DonationTypeEnum = z.enum(['ONE_TIME', 'RECURRING', 'PLEDGE', 'IN_KIND'])

// Create donation schema
export const createDonationSchema = z.object({
  donorId: z.string().min(1),
  campaignId: z.string().optional().nullable(),
  amount: z.number().positive(),
  date: z.coerce.date(),
  type: DonationTypeEnum.default('ONE_TIME'),
  method: z.string().max(50).optional().nullable(),
  notes: z.string().max(1000).optional().nullable()
})

// Donation list query schema
export const donationListQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(500).default(20),
  donorId: z.string().nullable().optional().transform(val => val === null || val === '' ? undefined : val),
  sortBy: z.enum(['date', 'amount', 'createdAt']).nullable().default('date').transform(val => val === null || val === '' ? 'date' : val),
  sortOrder: z.enum(['asc', 'desc']).nullable().default('desc').transform(val => val === null || val === '' ? 'desc' : val)
})
