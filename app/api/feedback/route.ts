import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { feedbackSchema } from '@/lib/feedback-schema'

export async function POST(request: NextRequest) {
  try {
    // Get userId from Clerk session (null if not authenticated)
    const { userId } = await auth()

    // Parse request body
    const body = await request.json()

    // Extract userAgent from request headers
    const userAgent = request.headers.get('user-agent') || undefined

    // Validate request body with Zod schema
    const validationResult = feedbackSchema.safeParse({
      ...body,
      userAgent,
    })

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: validationResult.error.issues[0]?.message || 'Invalid input',
        },
        { status: 400 }
      )
    }

    const { feedbackType, rating, message, pageUrl, anonId: clientAnonId } = validationResult.data

    // When logged in: store Clerk userId. When anonymous: store anonId (client-provided or generate)
    const clerkUserId = userId ?? null
    const anonId = !clerkUserId ? (clientAnonId || randomUUID()) : null

    // Create feedback record in database
    const feedback = await prisma.feedback.create({
      data: {
        userId: clerkUserId,
        anonId,
        feedbackType,
        rating: rating ?? null,
        message,
        pageUrl,
        userAgent,
      },
    })

    return NextResponse.json(
      {
        success: true,
        feedbackId: feedback.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting feedback:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit feedback. Please try again.',
      },
      { status: 500 }
    )
  }
}
