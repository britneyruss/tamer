import { prisma } from '@/lib/prisma'

export type DashboardSummary = {
  tbrCount: number
  scheduleCount: number
}

export const EMPTY_DASHBOARD_SUMMARY: DashboardSummary = {
  tbrCount: 0,
  scheduleCount: 0,
}

export async function getDashboardSummary(userId: string): Promise<DashboardSummary> {
  const [tbrCount, scheduleCount] = await Promise.all([
    prisma.tBR.count({
      where: { userId },
    }),
    prisma.schedule.count({
      where: { userId },
    }),
  ])

  return {
    tbrCount,
    scheduleCount,
  }
}
