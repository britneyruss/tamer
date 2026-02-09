import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Terms of Service - TBR Tamer",
  description: "Terms of Service for TBR Tamer",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      
      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl pt-24">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-gray-900 ${playfairDisplay.className}`}>
          Terms of Service — TBR Tamer
        </h1>
        <p className="text-gray-600 mb-12">Last updated: 02/06/2026</p>

        <div className="prose max-w-none space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            By accessing or using TBR Tamer ("the Service"), you agree to these Terms of Service.
          </p>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              1. Description of Service
            </h2>
            <p className="text-gray-700 leading-relaxed">
              TBR Tamer provides tools to help users organize reading lists and generate personalized reading schedules. The Service is provided for informational and entertainment purposes only.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              2. No Guarantees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not guarantee that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>You will complete any reading plan</li>
              <li>The Service will meet your expectations</li>
              <li>The Service will be uninterrupted or error-free</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Use of the Service is at your own discretion and risk.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              3. User Accounts
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are responsible for maintaining the confidentiality of your account and for all activity under your account.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              4. Acceptable Use
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Use the Service for unlawful purposes</li>
              <li>Attempt to disrupt or reverse engineer the Service</li>
              <li>Upload harmful or malicious content</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              5. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, branding, and software associated with TBR Tamer are owned by us or our licensors. You may not copy, distribute, or reuse them without permission.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You retain ownership of the reading data you submit.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              6. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may suspend or terminate the Service or your access at any time, with or without notice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may stop using the Service at any time.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              7. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Service is provided "as is" and "as available" without warranties of any kind, express or implied.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, TBR Tamer shall not be liable for any indirect, incidental, consequential, or special damages arising out of or related to your use of the Service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our total liability for any claim shall not exceed the amount you paid to use the Service (if any).
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              9. Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms from time to time. Continued use of the Service constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              10. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              11. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms, contact:{" "}
              <a
                href="mailto:support@tbr-tamer.com"
                className="text-[#FDBA31] hover:text-[#FDBA31]/80 underline"
              >
                support@tbr-tamer.com
              </a>
            </p>
          </section>
        </div>

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
