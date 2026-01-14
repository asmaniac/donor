// Session management for authentication
import { cookies } from 'next/headers'
import { prisma } from './db'
import { randomBytes } from 'crypto'

const SESSION_COOKIE_NAME = 'session_token'
const SESSION_EXPIRATION_HOURS = 24

/**
 * Generate a secure session token
 * @returns {string} Random session token
 */
function generateSessionToken() {
  return randomBytes(32).toString('hex')
}

/**
 * Create a new session for a user
 * @param {string} userId - User ID to create session for
 * @returns {Promise<string>} Session token
 */
export async function createSession(userId) {
  const token = generateSessionToken()
  const expiresAt = new Date(Date.now() + SESSION_EXPIRATION_HOURS * 60 * 60 * 1000)

  // Store session in database
  await prisma.session.create({
    data: {
      token,
      userId,
      expiresAt
    }
  })

  // Set HTTP-only cookie
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: SESSION_EXPIRATION_HOURS * 60 * 60
  })

  return token
}

/**
 * Get session and user data from session token
 * @param {string} sessionToken - Session token to validate
 * @returns {Promise<Object|null>} Session with user data or null
 */
export async function getSession(sessionToken) {
  if (!sessionToken) {
    return null
  }

  // Query database for session and user
  const session = await prisma.session.findUnique({
    where: { token: sessionToken },
    include: { user: true }
  })

  if (!session) {
    return null
  }

  // Check if session is expired
  if (new Date() > session.expiresAt) {
    await prisma.session.delete({
      where: { token: sessionToken }
    })
    return null
  }

  // Return session with user data (without password)
  const { user, ...sessionData } = session
  const { password: _, ...userWithoutPassword } = user
  return {
    ...sessionData,
    user: userWithoutPassword
  }
}

/**
 * Get current user from session (for server components)
 * @returns {Promise<Object|null>} User object or null
 */
export async function getSessionUser() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value

  if (!sessionToken) {
    return null
  }

  const session = await getSession(sessionToken)
  return session?.user || null
}

/**
 * Delete a session (logout)
 * @param {string} sessionToken - Session token to delete
 */
export async function deleteSession(sessionToken) {
  if (!sessionToken) {
    return
  }

  // Delete session from database
  await prisma.session.delete({
    where: { token: sessionToken }
  })

  // Clear session cookie
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
}
