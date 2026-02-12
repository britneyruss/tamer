"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useFeedback } from "@/components/feedback"

/**
 * The /feedback route opens the feedback modal and redirects to home.
 * This handles direct navigation to /feedback (e.g. bookmarks, shared links).
 */
export default function FeedbackPage() {
  const { openModal } = useFeedback()
  const router = useRouter()

  useEffect(() => {
    openModal()
    router.replace("/")
  }, [openModal, router])

  return null
}
