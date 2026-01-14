// Authentication API - Get Current Session
import { NextResponse } from 'next/server'
import { getSessionUser } from '@/lib/session'

export async function GET(request) {
  try {
    const user = await getSessionUser()

    if (!user) {
      return NextResponse.json(
        { user: null },
        { status: 200 }
      )
    }

    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    console.error('Session error:', error)
    return NextResponse.json(
      { error: 'Failed to get session' },
      { status: 500 }
    )
  }
}
