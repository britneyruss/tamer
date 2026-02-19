import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { BookOpen, SearchX } from "lucide-react";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Page Not Found | TBR Tamer",
  description: "The page you're looking for doesn't exist. Head back to TBR Tamer to organize your reading list.",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Book-themed Illustration */}
          <div className="bg-white rounded-full p-8 shadow-xl inline-flex items-center justify-center relative mb-8">
            <BookOpen className="h-16 w-16 text-[#1e3a4a]" strokeWidth={1.5} />
            <div className="absolute -top-1 -right-1 bg-[#faf8f5] rounded-full p-1">
              <SearchX className="h-6 w-6 text-[#FDBA31]" strokeWidth={2} />
            </div>
          </div>

          {/* 404 Heading */}
          <h1 className={`text-8xl md:text-9xl font-bold text-[#1e3a4a] mb-4 ${playfairDisplay.className}`}>
            404
          </h1>

          {/* Subheading */}
          <h2 className={`text-2xl md:text-3xl font-bold text-[#1e3a4a] mb-3 ${playfairDisplay.className}`}>
            This Page Got Lost Between the Chapters
          </h2>

          {/* Decorative text */}
          <p className="text-xl italic text-[#FDBA31] mb-6 font-[var(--font-script)]">
            let&apos;s find your next read
          </p>

          {/* Body text */}
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-10">
            The page you&apos;re looking for doesn&apos;t exist — but your TBR isn&apos;t going anywhere.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-[#FDBA31] text-white hover:bg-[#FDBA31]/90 text-lg px-8 py-3 rounded-lg font-semibold h-auto"
            >
              <Link href="/">Back to Home</Link>
            </Button>
            <Link
              href="/#features"
              className="text-[#1e3a4a] hover:text-[#FDBA31] underline underline-offset-4 font-medium transition-colors"
            >
              Browse Features
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
