"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar } from "lucide-react";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export function Hero() {
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
    <section className="relative min-h-screen flex items-center bg-[#1e3a4a] pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className={playfairDisplay.className}>Stop Staring at Your TBR.</span>
                <br />  
                <span className={`italic text-[#FDBA31] ${dancingScript.className}`}>Start Reading It.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                TBR Tamer helps readers turn a messy "To Be Read" into a simple weekly reading schedule—so you can stop planning and start escaping into your next book.
              </p>
            </div>

            {/* Email Signup Form */}
            <div className="space-y-3">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
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
                <p className="text-sm text-[#FDBA31] font-medium">
                  {successMessage}
                </p>
              )}
              {!successMessage && (
                <p className="text-sm text-gray-300">
                  Free forever for core features. No credit card required.
                </p>
              )}
            </div>
          </div>

          {/* Right Visual - Reading Schedule Widget */}
          <div className="relative hidden lg:block">
            <div className="relative transform rotate-2 shadow-2xl">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-lg overflow-hidden w-full max-w-md">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50/50">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-gray-700" />
                      <span className="font-semibold text-gray-800">Reading Schedule</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  {/* Schedule Entries */}
                  <div className="p-6 space-y-6">
                    {/* Week 01 */}
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-500 uppercase">Week</span>
                        <span className="text-2xl font-bold text-gray-800">01</span>
                        <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1 font-[var(--font-script)]">Iron Flame</h3>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              🔥 High Fantasy
                            </p>
                          </div>
                          <span className="px-2 py-1 text-xs font-semibold text-white bg-purple-500 rounded-full">
                            SERIES
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Week 02 */}
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-500 uppercase">Week</span>
                        <span className="text-2xl font-bold text-gray-800">02</span>
                        <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1 font-[var(--font-script)]">Book Lovers</h3>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              📖 Rom Com
                            </p>
                          </div>
                          <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                            STANDALONE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Week 03 */}
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-500 uppercase">Week</span>
                        <span className="text-2xl font-bold text-gray-800">03</span>
                      </div>
                      <div className="flex-1 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1 font-[var(--font-script)]">Brimstone</h3>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              ⭐ Fae & Alchemy
                            </p>
                          </div>
                          <span className="px-2 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
                            NEW RELEASE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 border-t bg-gray-50/50">
                    <p className="text-xs text-gray-500 italic text-center">
                      "Adjust your schedule and preferences at any time"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
