import { BookMarked, CalendarClock } from 'lucide-react'
import type { DashboardSummary } from '@/lib/dashboard-summary'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type DashboardSummaryCardsProps = {
  summary: DashboardSummary
}

export function DashboardSummaryCards({ summary }: DashboardSummaryCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-serif text-lg">TBR Books</CardTitle>
          <BookMarked className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">{summary.tbrCount}</p>
          <p className="text-sm text-muted-foreground">Books in your reading queue.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-serif text-lg">Scheduled Weeks</CardTitle>
          <CalendarClock className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">{summary.scheduleCount}</p>
          <p className="text-sm text-muted-foreground">Books already on your plan.</p>
        </CardContent>
      </Card>
    </div>
  )
}
