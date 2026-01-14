// Authentication utilities
import { prisma } from './db'
import { hashPassword, verifyPassword } from './password'

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Promise<Object>} Created user object
 */
export async function register(userData) {
  const { email, password, firstName, lastName, organizationId } = userData

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    throw new Error('User already exists')
  }

  // Hash password
  const hashedPassword = await hashPassword(password)

  // Create user in database
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      organizationId
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      role: true,
      organizationId: true,
      createdAt: true
    }
  })

  return user
}

/**
 * Authenticate user login
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object|null>} User object or null if invalid
 */
export async function login(email, password) {
  // Normalize email (trim and lowercase)
  const normalizedEmail = email.trim().toLowerCase()
  
  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email: normalizedEmail },
    include: { organization: true }
  })

  if (!user) {
    return null
  }

  // Verify password
  const isPasswordValid = await verifyPassword(password, user.password)

  if (!isPasswordValid) {
    return null
  }

  // Return user object without password
  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}

/**
 * Get user by ID
 * @param {string} userId - User ID
 * @returns {Promise<Object|null>} User object or null
 */
export async function getUserById(userId) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { organization: true },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      role: true,
      organizationId: true,
      organization: true,
      createdAt: true,
      updatedAt: true
    }
  })

  return user || null
}
