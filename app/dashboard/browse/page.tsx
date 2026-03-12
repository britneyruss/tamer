import { auth } from '@clerk/nextjs/server'
import { Compass } from 'lucide-react'
import { redirect } from 'next/navigation'
import { DashboardEmptyState } from '@/components/dashboard/dashboard-empty-state'
import { DashboardSummaryCards } from '@/components/dashboard/dashboard-summary-cards'
import { EMPTY_DASHBOARD_SUMMARY, getDashboardSummary } from '@/lib/dashboard-summary'

export default async function BrowsePanelPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  let summary = EMPTY_DASHBOARD_SUMMARY
  let summaryError: string | null = null

  try {
    summary = await getDashboardSummary(userId)
  } catch (error) {
    console.error('Failed to load browse dashboard summary:', error)
    summaryError = "We couldn't load your dashboard summary. Please try again."
  }

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-serif text-2xl font-bold md:text-3xl">Browse Books</h1>
        <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
          Discover new romantasy reads and save your favorites into the plan.
        </p>
        {summaryError ? <p className="text-sm text-destructive">{summaryError}</p> : null}
      </header>

      <DashboardSummaryCards summary={summary} />

      <DashboardEmptyState
        icon={Compass}
        title="Find your next page-turner"
        description="You have not saved any discovery picks yet. Browse titles and add favorites to your TBR."
        primaryActionLabel="View my TBR"
        primaryActionHref="/dashboard/tbr"
        secondaryActionLabel="Shared schedules"
        secondaryActionHref="/dashboard/shared"
      />
    </section>
  )
}
