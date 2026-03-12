'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Dashboard route error:', error)
  }, [error])

  return (
    <section className="mx-auto max-w-xl space-y-3 py-16 text-center">
      <h1 className="font-serif text-2xl font-bold">Something went off the page</h1>
      <p className="text-sm text-muted-foreground">
        We could not load this dashboard panel. Please try again.
      </p>
      <Button
        onClick={reset}
        className="bg-[#FDBA31] text-white hover:bg-[#FDBA31]/90"
      >
        Try again
      </Button>
    </section>
  )
}
