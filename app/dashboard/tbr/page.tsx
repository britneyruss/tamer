import { auth } from '@clerk/nextjs/server'
import { BookPlus } from 'lucide-react'
import { redirect } from 'next/navigation'
import { DashboardEmptyState } from '@/components/dashboard/dashboard-empty-state'
import { DashboardSummaryCards } from '@/components/dashboard/dashboard-summary-cards'
import { EMPTY_DASHBOARD_SUMMARY, getDashboardSummary } from '@/lib/dashboard-summary'

export default async function TbrPanelPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  let summary = EMPTY_DASHBOARD_SUMMARY
  let summaryError: string | null = null

  try {
    summary = await getDashboardSummary(userId)
  } catch (error) {
    console.error('Failed to load TBR dashboard summary:', error)
    summaryError = "We couldn't load your TBR. Please try again."
  }

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-serif text-2xl font-bold md:text-3xl">TBR</h1>
        <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
          Keep your reading queue organized and ready for your weekly plan.
        </p>
        {summaryError ? <p className="text-sm text-destructive">{summaryError}</p> : null}
      </header>

      <DashboardSummaryCards summary={summary} />

      <DashboardEmptyState
        icon={BookPlus}
        title="Your reading list is waiting"
        description="You don't have any books in your TBR yet. Add your first title to start shaping your weekly plan."
        primaryActionLabel="Add a book"
        primaryActionHref="/dashboard/browse"
        secondaryActionLabel="View my schedule"
        secondaryActionHref="/dashboard/schedule"
      />
    </section>
  )
}
