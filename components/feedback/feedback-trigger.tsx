"use client"

import { useState } from "react"
import { MessageSquarePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeedbackModal } from "./feedback-modal"
import { cn } from "@/lib/utils"

interface FeedbackTriggerProps {
  className?: string
  variant?: "floating" | "inline" | "icon"
}

export function FeedbackTrigger({ className, variant = "floating" }: FeedbackTriggerProps) {
  const [open, setOpen] = useState(false)

  if (variant === "floating") {
    return (
      <>
        <Button
          onClick={() => setOpen(true)}
          className={cn(
            "fixed bottom-6 right-6 z-50 shadow-lg rounded-full",
            "hover:scale-105 transition-transform",
            className
          )}
          size="lg"
          aria-label="Give feedback"
        >
          <MessageSquarePlus className="size-5 mr-2" />
          Feedback
        </Button>
        <FeedbackModal open={open} onOpenChange={setOpen} />
      </>
    )
  }

  if (variant === "icon") {
    return (
      <>
        <Button
          onClick={() => setOpen(true)}
          variant="ghost"
          size="icon"
          className={cn(className)}
          aria-label="Give feedback"
        >
          <MessageSquarePlus className="size-5" />
        </Button>
        <FeedbackModal open={open} onOpenChange={setOpen} />
      </>
    )
  }

  // inline variant
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className={cn(className)}
      >
        <MessageSquarePlus className="size-4 mr-2" />
        Give Feedback
      </Button>
      <FeedbackModal open={open} onOpenChange={setOpen} />
    </>
  )
}
