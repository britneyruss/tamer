"use client";

import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, BookOpen, Plus } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { Dancing_Script } from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function Dashboard() {
  return (
    <main className="min-h-screen bg-[#1e3a4a]">
      {/* Dashboard Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e3a4a]/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/TBR_Tamer_Logo-d4eaaf74-0f90-4b6d-86cd-716d759c1a30.png"
                alt="TBR Tamer Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span
                className={`text-2xl md:text-3xl font-bold text-white ${playfairDisplay.className}`}
              >
                TBR Tamer
              </span>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
              }}
            />
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-2 ${playfairDisplay.className}`}
          >
            Your Reading Schedule
          </h1>
          <p className="text-lg text-white/90 mb-8">
            <span className={dancingScript.className}>
              Your week-by-week reading plan
            </span>
          </p>

          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-700" />
                  <span className="font-semibold text-gray-800">
                    Reading Schedule
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <BookOpen className="h-16 w-16 text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-2">No books in your schedule yet</p>
                  <p className="text-sm text-gray-400 mb-6">
                    Add books from your TBR list to build your weekly reading plan
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#FDBA31] text-white hover:bg-[#FDBA31]/90 font-medium transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    Add to schedule
                  </button>
                </div>
              </div>

              <div className="px-6 py-4 border-t bg-gray-50/50">
                <p className="text-xs text-gray-500 italic text-center">
                  &quot;Adjust your schedule and preferences at any time&quot;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
