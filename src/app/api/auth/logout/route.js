// Authentication API - User Logout
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { deleteSession } from '@/lib/session'

const SESSION_COOKIE_NAME = 'session_token'

export async function POST(request) {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value

    if (sessionToken) {
      await deleteSession(sessionToken)
    }

    // Clear cookie
    cookieStore.delete(SESSION_COOKIE_NAME)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    )
  }
}
