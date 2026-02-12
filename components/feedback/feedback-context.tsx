"use client"

import { createContext, useContext, useState, useCallback } from "react"
import { FeedbackModal } from "./feedback-modal"

interface FeedbackContextValue {
  openModal: () => void
}

const FeedbackContext = createContext<FeedbackContextValue | null>(null)

export function FeedbackProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  const openModal = useCallback(() => {
    setOpen(true)
  }, [])

  return (
    <FeedbackContext.Provider value={{ openModal }}>
      {children}
      <FeedbackModal open={open} onOpenChange={setOpen} />
    </FeedbackContext.Provider>
  )
}

export function useFeedback(): FeedbackContextValue {
  const context = useContext(FeedbackContext)
  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider")
  }
  return context
}
