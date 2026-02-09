import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, MessageSquare } from "lucide-react";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "About Us - TBR Tamer",
  description: "Learn about TBR Tamer and the story behind the product",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      
      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl pt-24">
        <h1 className={`text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center ${playfairDisplay.className}`}>
          About TBR Tamer
        </h1>

        {/* Story Section */}
        <section className="mb-16">
          <div className="max-w-none space-y-6 text-gray-700 leading-relaxed">
            <div className="float-left mr-6 mb-4 md:mr-8 md:mb-6">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#1e3a4a]">
                <Image
                  src="/founder-photo.png"
                  alt="Founder"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-xl md:text-2xl">
              TBR Tamer started as a passion project born from a rekindled love for reading. I was an avid reader as a child, devouring books by the stack, but I lost that habit as I grew into an adult and life got busy.
            </p>
            <p className="text-xl md:text-2xl">
              That changed when my best friend got me hooked on Romantasy. I haven't turned back since. The magic of getting lost in a good story returned, and my reading list began to grow.
            </p>
            <p className="text-xl md:text-2xl">
              However, I quickly got overwhelmed with my TBR (To Be Read) list. I just endlessly kept adding to it and felt paralyzed about what I should read next. Speaking to friends, they shared a similar feeling—too many books, too little organization, and "decision paralysis" when it came time to pick up the next read.
            </p>
            <p className="text-xl md:text-2xl">
              I am a product leader by trade and have been wanting to hone my technical skills—so this project was born. It combines my professional expertise with my personal passion, solving a problem I face every single day.
            </p>
            <p className="text-xl md:text-2xl">
              If you'd like to connect, feel free to reach out at{" "}
              <a
                href="mailto:britney.z.russ@gmail.com"
                className="text-[#FDBA31] hover:text-[#FDBA31]/80 underline font-medium"
              >
                britney.z.russ@gmail.com
              </a>
              .
            </p>
            <div className="clear-both"></div>
          </div>
        </section>

        {/* Action Cards */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Friend on Goodreads Card */}
          <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1e3a4a] rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold text-[#1e3a4a] mb-3 ${playfairDisplay.className}`}>
                Friend on Goodreads
              </h3>
              <p className="text-gray-700 mb-6">
                Connect with us on Goodreads and share your reading journey!
              </p>
              <Button
                asChild
                className="bg-[#FDBA31] text-white hover:bg-[#FDBA31]/90"
              >
                <a
                  href="https://www.goodreads.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find Us on Goodreads
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Give Feedback Card */}
          <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1e3a4a] rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold text-[#1e3a4a] mb-3 ${playfairDisplay.className}`}>
                Give Feedback
              </h3>
              <p className="text-gray-700 mb-6">
                Have ideas or suggestions? We'd love to hear from you!
              </p>
              <Button
                asChild
                className="bg-[#FDBA31] text-white hover:bg-[#FDBA31]/90"
              >
                <Link href="/feedback">
                  Share Your Thoughts
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Back to Home Link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-[#FDBA31] hover:text-[#FDBA31]/80 transition-colors inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
