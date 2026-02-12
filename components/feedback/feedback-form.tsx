"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { feedbackFormSchema, feedbackTypeEnum, type FeedbackFormInput } from "@/lib/feedback-schema"
import { cn } from "@/lib/utils"

interface FeedbackFormProps {
  onSubmit: (data: FeedbackFormInput) => Promise<void>
  onCancel: () => void
  isSubmitting: boolean
}

const feedbackTypeLabels: Record<typeof feedbackTypeEnum[number], string> = {
  bug: "Bug Report",
  feature: "Feature Request",
  improvement: "Improvement Suggestion",
  other: "Other",
}

export function FeedbackForm({ onSubmit, onCancel, isSubmitting }: FeedbackFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FeedbackFormInput>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      message: "",
    },
  })

  const selectedRating = watch("rating")
  const selectedFeedbackType = watch("feedbackType")

  const handleFormSubmit = handleSubmit(async (data) => {
    await onSubmit(data)
  })

  return (
    <form onSubmit={handleFormSubmit} className="space-y-5">
      {/* Feedback Type */}
      <div className="space-y-2">
        <Label htmlFor="feedbackType">What kind of feedback?</Label>
        <Select
          value={selectedFeedbackType}
          onValueChange={(value) => setValue("feedbackType", value as typeof feedbackTypeEnum[number])}
          disabled={isSubmitting}
        >
          <SelectTrigger id="feedbackType" className="w-full" aria-invalid={!!errors.feedbackType}>
            <SelectValue placeholder="Select feedback type" />
          </SelectTrigger>
          <SelectContent>
            {feedbackTypeEnum.map((type) => (
              <SelectItem key={type} value={type}>
                {feedbackTypeLabels[type]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.feedbackType && (
          <p className="text-sm text-destructive">{errors.feedbackType.message}</p>
        )}
      </div>

      {/* Rating */}
      <div className="space-y-2">
        <Label>How would you rate your experience? (Optional)</Label>
        <div className="flex gap-1" role="radiogroup" aria-label="Rating">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              type="button"
              onClick={() => setValue("rating", rating)}
              disabled={isSubmitting}
              className={cn(
                "p-1 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "hover:scale-110 transition-transform",
                isSubmitting && "cursor-not-allowed opacity-50"
              )}
              aria-label={`Rate ${rating} out of 5`}
              role="radio"
              aria-checked={selectedRating === rating}
            >
              <Star
                className={cn(
                  "size-7 transition-colors",
                  selectedRating && selectedRating >= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground hover:text-yellow-300"
                )}
              />
            </button>
          ))}
          {selectedRating && (
            <button
              type="button"
              onClick={() => setValue("rating", undefined)}
              disabled={isSubmitting}
              className="ml-2 text-sm text-muted-foreground hover:text-foreground underline"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Tell us more</Label>
        <Textarea
          id="message"
          placeholder="Describe your feedback in detail..."
          rows={4}
          disabled={isSubmitting}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
        <p className="text-xs text-muted-foreground">
          Minimum 10 characters, maximum 2000 characters
        </p>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner className="mr-2" />
              Submitting...
            </>
          ) : (
            "Submit Feedback"
          )}
        </Button>
      </div>
    </form>
  )
}
