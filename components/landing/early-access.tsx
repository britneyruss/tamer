"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Success - you're in the loop");
        setEmail("");
      } else {
        setSuccessMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setSuccessMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="py-20 bg-[#1e3a4a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className={`text-4xl md:text-5xl font-bold text-white ${playfairDisplay.className}`}>
            Be One of the First to Try
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Don't let your TBR keep stressing you out. Get notified when TBR Tamer is available. Anyone can get this eARC ;)
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black placeholder:text-gray-500 rounded-md h-12 px-4 flex-1"
              required
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FDBA31] text-white hover:bg-[#FDBA31]/90 rounded-md h-12 px-8 whitespace-nowrap disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Get Early Access"}
            </Button>
          </form>
          {successMessage && (
            <p className="text-sm text-[#FDBA31] font-medium mt-2">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
