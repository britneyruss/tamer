import { auth } from '@clerk/nextjs/server'
import { CalendarPlus } from 'lucide-react'
import { redirect } from 'next/navigation'
import { DashboardEmptyState } from '@/components/dashboard/dashboard-empty-state'
import { DashboardSummaryCards } from '@/components/dashboard/dashboard-summary-cards'
import { EMPTY_DASHBOARD_SUMMARY, getDashboardSummary } from '@/lib/dashboard-summary'

export default async function SchedulePanelPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  let summary = EMPTY_DASHBOARD_SUMMARY
  let summaryError: string | null = null

  try {
    summary = await getDashboardSummary(userId)
  } catch (error) {
    console.error('Failed to load schedule dashboard summary:', error)
    summaryError = "We couldn't load your schedule. Please try again."
  }

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-serif text-2xl font-bold md:text-3xl">My Schedule</h1>
        <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
          Build a week-by-week reading rhythm that works with your life.
        </p>
        {summaryError ? <p className="text-sm text-destructive">{summaryError}</p> : null}
      </header>

      <DashboardSummaryCards summary={summary} />

      <DashboardEmptyState
        icon={CalendarPlus}
        title="No schedule yet - let's fix that"
        description="You have no books scheduled yet. Start with your TBR and we will build your weekly plan."
        primaryActionLabel="View my TBR"
        primaryActionHref="/dashboard/tbr"
        secondaryActionLabel="Browse books"
        secondaryActionHref="/dashboard/browse"
      />
    </section>
  )
}
