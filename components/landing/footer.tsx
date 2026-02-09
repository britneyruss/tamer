import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1e3a4a] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Company Information */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/TBR_Tamer_Logo-d4eaaf74-0f90-4b6d-86cd-716d759c1a30.png"
                alt="TBR Tamer Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">TBR Tamer</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Helping you conquer your TBR pile, one spicy chapter at a time. The only reading companion that won't judge you for buying another book.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@tbrtamer.com"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Links */}
          <div>
            <h3 className="text-[#FDBA31] font-bold mb-4 font-[var(--font-script)]">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-white/80 hover:text-white transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/80 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-white/80 hover:text-white transition-colors text-sm">
                  Give Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div>
            <h3 className="text-[#FDBA31] font-bold mb-4 font-[var(--font-script)]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 TBR Tamer. All rights reserved.</p>
            <p className="text-center">
              By using TBR Tamer, you agree to our{" "}
              <Link href="/terms" className="text-white/80 hover:text-white underline transition-colors">
                Terms of Service
              </Link>
              {" "}and{" "}
              <Link href="/privacy" className="text-white/80 hover:text-white underline transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              Made with <span className="text-red-500">❤️</span> and too many bookmarks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
