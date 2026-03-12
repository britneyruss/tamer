'use client'

import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { dashboardNavItems } from '@/components/dashboard/dashboard-nav-items'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

function isActiveLink(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1e3a4a]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/dashboard" className="font-serif text-2xl font-bold text-white">
          TBR Tamer
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {dashboardNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-md border-b-2 border-transparent px-2 py-1 text-sm font-medium text-white transition-colors hover:text-[#FDBA31]',
                isActiveLink(pathname, item.href) && 'border-[#FDBA31] text-[#FDBA31]'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            size="sm"
            className="bg-[#FDBA31] text-white hover:bg-[#FDBA31]/90"
          >
            <Link href="/dashboard/tbr">View my TBR</Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-[#FDBA31]"
              >
                <Menu className="size-5" />
                <span className="sr-only">Open dashboard navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] border-r p-0">
              <SheetHeader className="border-b bg-[#1e3a4a] text-left">
                <SheetTitle className="font-serif text-2xl font-bold text-white">
                  TBR Tamer
                </SheetTitle>
                <SheetDescription className="text-white/80">
                  Open a dashboard panel.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-1 p-4">
                {dashboardNavItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent',
                          isActiveLink(pathname, item.href) &&
                            'bg-[#FDBA31]/15 font-semibold text-[#1e3a4a]'
                        )}
                      >
                        <Icon className="size-4" />
                        {item.label}
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>

              <Separator />

              <div className="p-4">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full bg-[#FDBA31] text-white hover:bg-[#FDBA31]/90"
                  >
                    <Link href="/dashboard/tbr">View my TBR</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  )
}
