import { z } from 'zod'

export const feedbackTypeEnum = ['bug', 'feature', 'improvement', 'other'] as const
export type FeedbackType = typeof feedbackTypeEnum[number]

export const feedbackSchema = z.object({
  feedbackType: z.enum(feedbackTypeEnum, {
    required_error: "Please select a feedback type",
  }),
  rating: z.number().min(1).max(5).optional(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
  pageUrl: z.string(),
  userAgent: z.string().optional()
})

export type FeedbackInput = z.infer<typeof feedbackSchema>

// Client-side form schema (without pageUrl and userAgent which are auto-captured)
export const feedbackFormSchema = z.object({
  feedbackType: z.enum(feedbackTypeEnum, {
    required_error: "Please select a feedback type",
  }),
  rating: z.number().min(1).max(5).optional(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
})

export type FeedbackFormInput = z.infer<typeof feedbackFormSchema>
