import { auth } from '@clerk/nextjs/server'
import { UsersRound } from 'lucide-react'
import { redirect } from 'next/navigation'
import { DashboardEmptyState } from '@/components/dashboard/dashboard-empty-state'
import { DashboardSummaryCards } from '@/components/dashboard/dashboard-summary-cards'
import { EMPTY_DASHBOARD_SUMMARY, getDashboardSummary } from '@/lib/dashboard-summary'

export default async function SharedPanelPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  let summary = EMPTY_DASHBOARD_SUMMARY
  let summaryError: string | null = null

  try {
    summary = await getDashboardSummary(userId)
  } catch (error) {
    console.error('Failed to load shared dashboard summary:', error)
    summaryError = "We couldn't load your dashboard summary. Please try again."
  }

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-serif text-2xl font-bold md:text-3xl">Shared Schedules</h1>
        <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
          Follow trusted reader plans and borrow ideas for your own routine.
        </p>
        {summaryError ? <p className="text-sm text-destructive">{summaryError}</p> : null}
      </header>

      <DashboardSummaryCards summary={summary} />

      <DashboardEmptyState
        icon={UsersRound}
        title="No shared schedules yet"
        description="You are not following any shared plans yet. Explore new picks and build your own first schedule."
        primaryActionLabel="View my schedule"
        primaryActionHref="/dashboard/schedule"
        secondaryActionLabel="Browse books"
        secondaryActionHref="/dashboard/browse"
      />
    </section>
  )
}
