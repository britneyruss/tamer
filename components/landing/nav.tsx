import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  SignInButton, 
  UserButton, 
  SignedIn, 
  SignedOut 
} from "@clerk/nextjs";
import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e3a4a]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/TBR_Tamer_Logo-d4eaaf74-0f90-4b6d-86cd-716d759c1a30.png"
              alt="TBR Tamer Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className={`text-2xl md:text-3xl font-bold text-white ${playfairDisplay.className}`}>TBR Tamer</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-base md:text-lg font-medium text-white hover:text-[#FDBA31] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#faq"
              className="text-base md:text-lg font-medium text-white hover:text-[#FDBA31] transition-colors"
            >
              FAQ
            </Link>
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  className="bg-[#FDBA31] text-white hover:bg-[#FDBA31]/90 rounded-md"
                  size="default"
                >
                  Sign Up Free
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8"
                  }
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile menu button - can be enhanced later */}
          <div className="md:hidden flex items-center gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8"
                  }
                }}
              />
            </SignedIn>
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
