"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { ValueProps } from "@/components/landing/value-props";
import { Features } from "@/components/landing/features";
import { FAQ } from "@/components/landing/faq";
import { EarlyAccess } from "@/components/landing/early-access";
import { Footer } from "@/components/landing/footer";
import { Dashboard } from "@/components/dashboard/dashboard";

export function HomePage() {
  return (
    <>
      <SignedIn>
        <Dashboard />
      </SignedIn>
      <SignedOut>
        <main className="min-h-screen">
          <Nav />
          <Hero />
          <ValueProps />
          <Features />
          <FAQ />
          <EarlyAccess />
          <Footer />
        </main>
      </SignedOut>
    </>
  );
}
