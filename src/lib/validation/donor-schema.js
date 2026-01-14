// Zod validation schemas for donor operations
import { z } from 'zod'

// DonorStatusEnum
const DonorStatusEnum = z.enum(['ACTIVE', 'LAPSED', 'INACTIVE', 'DO_NOT_CONTACT'])

// RetentionRiskEnum
const RetentionRiskEnum = z.enum(['UNKNOWN', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])

// Create donor schema
export const createDonorSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email().optional().nullable(),
  phone: z.string().max(20).optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().max(50).optional().nullable(),
  state: z.string().max(50).optional().nullable(),
  zipCode: z.string().max(20).optional().nullable(),
  status: DonorStatusEnum.default('ACTIVE'),
  retentionRisk: RetentionRiskEnum.default('UNKNOWN')
})

// Donor list query schema
export const donorListQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(500).default(20),
  search: z.string().nullable().optional().transform(val => val === null || val === '' ? undefined : val),
  status: DonorStatusEnum.nullable().optional().transform(val => val === null || val === '' ? undefined : val),
  retentionRisk: RetentionRiskEnum.nullable().optional().transform(val => val === null || val === '' ? undefined : val),
  sortBy: z.enum(['firstName', 'lastName', 'totalAmount', 'lastGiftDate', 'createdAt']).nullable().default('firstName').transform(val => val === null || val === '' ? 'firstName' : val),
  sortOrder: z.enum(['asc', 'desc']).nullable().default('asc').transform(val => val === null || val === '' ? 'asc' : val)
})
