"use client"

import { useState, useCallback, useEffect } from "react"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { FeedbackForm } from "./feedback-form"
import type { FeedbackFormInput } from "@/lib/feedback-schema"

interface FeedbackModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function FeedbackModal({ open, onOpenChange }: FeedbackModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(async (data: FeedbackFormInput) => {
    setIsSubmitting(true)

    try {
      // Capture page URL and user agent
      const pageUrl = typeof window !== "undefined" 
        ? window.location.pathname + window.location.search
        : ""

      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          pageUrl,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit feedback")
      }

      toast.success("Thanks for your feedback!", {
        description: "We appreciate you taking the time to help us improve.",
      })
      onOpenChange(false)
    } catch (error) {
      console.error("Feedback submission error:", error)
      toast.error("Failed to submit feedback", {
        description: error instanceof Error ? error.message : "Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [onOpenChange])

  const handleCancel = useCallback(() => {
    if (!isSubmitting) {
      onOpenChange(false)
    }
  }, [isSubmitting, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto"
        onInteractOutside={(e) => {
          if (isSubmitting) {
            e.preventDefault()
          }
        }}
        onEscapeKeyDown={(e) => {
          if (isSubmitting) {
            e.preventDefault()
          }
        }}
      >
        <DialogHeader>
          <DialogTitle>Give Feedback</DialogTitle>
          <DialogDescription>
            Share your thoughts to help us improve TBR Tamer.
          </DialogDescription>
        </DialogHeader>
        <FeedbackForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  )
}

// Provider component that handles the global feedback modal state
// including keyboard shortcuts
interface FeedbackModalProviderProps {
  children: React.ReactNode
}

export function FeedbackModalProvider({ children }: FeedbackModalProviderProps) {
  const [open, setOpen] = useState(false)

  // Global keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        // Prevent default browser behavior (e.g., Chrome's address bar)
        event.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {children}
      <FeedbackModal open={open} onOpenChange={setOpen} />
    </>
  )
}
