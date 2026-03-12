import { BookMarked, CalendarRange, Compass, Users2, type LucideIcon } from 'lucide-react'

export type DashboardNavItem = {
  label: string
  href: string
  icon: LucideIcon
}

export const dashboardNavItems: DashboardNavItem[] = [
  {
    label: 'TBR',
    href: '/dashboard/tbr',
    icon: BookMarked,
  },
  {
    label: 'My Schedule',
    href: '/dashboard/schedule',
    icon: CalendarRange,
  },
  {
    label: 'Browse Books',
    href: '/dashboard/browse',
    icon: Compass,
  },
  {
    label: 'Shared Schedules',
    href: '/dashboard/shared',
    icon: Users2,
  },
]
