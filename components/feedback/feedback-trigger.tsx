"use client"

import { MessageSquarePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFeedback } from "./feedback-context"
import { cn } from "@/lib/utils"

interface FeedbackTriggerProps {
  className?: string
  variant?: "floating" | "inline" | "icon"
}

export function FeedbackTrigger({ className, variant = "floating" }: FeedbackTriggerProps) {
  const { openModal } = useFeedback()

  if (variant === "floating") {
    return (
      <Button
        onClick={openModal}
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
    )
  }

  if (variant === "icon") {
    return (
      <Button
        onClick={openModal}
        variant="ghost"
        size="icon"
        className={cn(className)}
        aria-label="Give feedback"
      >
        <MessageSquarePlus className="size-5" />
      </Button>
    )
  }

  // inline variant
  return (
    <Button
      onClick={openModal}
      variant="outline"
      className={cn(className)}
    >
      <MessageSquarePlus className="size-4 mr-2" />
      Give Feedback
    </Button>
  )
}
