"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export function FAQ() {
  const faqs = [
    {
      question: "Is this only for specific genres?",
      answer: "The first version is designed for romantasy readers—but other genres may come later. Sci-fi, fantasy, young adult are all compatible!"
    },
    {
      question: "How is this different from Goodreads, Fable or StoryGraph?",
      answer: "While those platforms help you track what you've read, TBR Tamer focuses on planning what you'll read next. We turn your overwhelming TBR into a manageable weekly schedule, so you never have to decide what to read next."
    },
    {
      question: "Do I have to use integrations?",
      answer: "No! While we support importing from Goodreads, you can also manually add books to your TBR. Use whatever method works best for you."
    },
    {
      question: "Is this free?",
      answer: "Yes! The core features are free forever. No credit card required to get started."
    },
    {
      question: "When will I get access?",
      answer: "We're currently in early access. Sign up with your email to be notified when TBR Tamer is available!"
    },
    {
      question: "Can I give feedback as a beta user?",
      answer: "Absolutely! We'd love to hear from you. Use the 'Give Feedback' link in the footer to share your thoughts and help us improve."
    },
    {
      question: "Is there a mobile app?",
      answer: "Not yet! We're starting with a web app, but a mobile app is definitely on our roadmap. Stay tuned!"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#faf8f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold text-[#1e3a4a] mb-4 ${playfairDisplay.className}`}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers (and book recs, if you ask nicely).
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg mb-3 px-6"
              >
                <AccordionTrigger className={`text-left font-semibold text-[#1e3a4a] hover:no-underline py-4 ${playfairDisplay.className}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
