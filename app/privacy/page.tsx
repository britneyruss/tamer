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
  title: "Privacy Policy - TBR Tamer",
  description: "Privacy Policy for TBR Tamer",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      
      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl pt-24">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-gray-900 ${playfairDisplay.className}`}>
          Privacy Policy — TBR Tamer
        </h1>
        <p className="text-gray-600 mb-12">Last updated: 2/6/2026</p>

        <div className="prose max-w-none space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            TBR Tamer ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
          </p>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect only the information necessary to operate TBR Tamer, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Email address (for account creation and communication)</li>
              <li>Reading-related data you voluntarily provide (such as book titles, schedules, preferences)</li>
              <li>Basic usage data (such as pages visited or feature usage)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not collect payment information at this time.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide and improve the TBR Tamer service</li>
              <li>Generate personalized reading schedules</li>
              <li>Communicate with you about your account or product updates</li>
              <li>Maintain the security and functionality of the platform</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              Data Storage and Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable measures to protect your data. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              Data Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal data.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share data only:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>With service providers necessary to operate the platform (e.g., hosting, analytics)</li>
              <li>If required by law or legal process</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              Account Deletion
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You may delete your account at any time. Upon deletion, your personal data will be removed from our active systems within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              TBR Tamer is not intended for users under the age of 13, and we do not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Continued use of the service constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900 ${playfairDisplay.className}`}>
              Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, contact us at:{" "}
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
