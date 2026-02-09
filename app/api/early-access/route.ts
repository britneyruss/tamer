import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existing = await prisma.earlyAccess.findUnique({
      where: { email: email.toLowerCase().trim() },
    })

    if (existing) {
      return NextResponse.json(
        { message: 'Email already registered' },
        { status: 200 }
      )
    }

    // Create new early access entry
    await prisma.earlyAccess.create({
      data: {
        email: email.toLowerCase().trim(),
      },
    })

    return NextResponse.json(
      { message: 'Success - you\'re in the loop' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting early access:', error)
    return NextResponse.json(
      { error: 'Failed to submit email' },
      { status: 500 }
    )
  }
}
