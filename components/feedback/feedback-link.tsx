"use client"

import { forwardRef } from "react"
import { useFeedback } from "./feedback-context"
import { cn } from "@/lib/utils"

interface FeedbackLinkProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode
}

/**
 * A link-styled element that opens the feedback modal instead of navigating.
 * Use this in place of <Link href="/feedback"> for "Give Feedback" links.
 */
export const FeedbackLink = forwardRef<HTMLButtonElement, FeedbackLinkProps>(
  function FeedbackLink({ children, className, onClick, ...props }, ref) {
    const { openModal } = useFeedback()

    return (
      <button
        ref={ref}
        type="button"
        onClick={(e) => {
          openModal()
          onClick?.(e)
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
