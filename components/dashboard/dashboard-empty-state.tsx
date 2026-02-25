import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type DashboardEmptyStateProps = {
  icon: LucideIcon
  title: string
  description: string
  primaryActionLabel: string
  primaryActionHref: string
  secondaryActionLabel?: string
  secondaryActionHref?: string
}

export function DashboardEmptyState({
  icon: Icon,
  title,
  description,
  primaryActionLabel,
  primaryActionHref,
  secondaryActionLabel,
  secondaryActionHref,
}: DashboardEmptyStateProps) {
  return (
    <Card className="border-dashed">
      <CardHeader className="items-center text-center">
        <div className="rounded-full bg-[#FDBA31]/20 p-3 text-[#1e3a4a] dark:text-[#FDBA31]">
          <Icon className="size-6" />
        </div>
        <p className="font-script text-lg text-[#1e3a4a] dark:text-[#FDBA31]">
          New chapter, fresh start.
        </p>
        <CardTitle className="font-serif text-2xl">{title}</CardTitle>
        <CardDescription className="max-w-xl text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center gap-3 sm:flex-row">
        <Button
          asChild
          className="bg-[#FDBA31] text-white hover:bg-[#FDBA31]/90"
        >
          <Link href={primaryActionHref}>{primaryActionLabel}</Link>
        </Button>
        {secondaryActionLabel && secondaryActionHref ? (
          <Button asChild variant="outline">
            <Link href={secondaryActionHref}>{secondaryActionLabel}</Link>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  )
}
