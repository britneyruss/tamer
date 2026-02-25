import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { getDashboardSummary } from '@/lib/dashboard-summary'

export async function GET() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const summary = await getDashboardSummary(userId)

    return NextResponse.json(summary, { status: 200 })
  } catch (error) {
    console.error('Failed to load dashboard summary:', error)
    return NextResponse.json(
      { error: "We couldn't load your dashboard summary. Please try again." },
      { status: 500 }
    )
  }
}
