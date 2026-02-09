import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Sparkles, Zap } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function ValueProps() {
  return (
    <section className="py-20 bg-[#faf8f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-[#1e3a4a] mb-4 ${playfairDisplay.className}`}>
            Why Readers Love TBR Tamer
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Designed by readers who know the struggle of having more books than shelf space.
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {/* Card 1: Left Aligned */}
          <div className="flex justify-start">
            <Card className="bg-white border-0 shadow-xl w-full max-w-5xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className={`text-3xl md:text-4xl font-bold text-[#1e3a4a] mb-4 ${playfairDisplay.className}`}>
                      Never Ask 'What Should I Read Next?' Again
                    </h3>
                    <p className="text-lg text-gray-700 mb-8">
                      Your TBR is automatically turned into a clear, week-by-week plan —so the decision is already made.
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex-1">
                      <p className="text-base font-semibold text-gray-600 mb-4">MESSY TBR</p>
                      <div className="space-y-3">
                        <div className="h-20 bg-blue-400/30 rounded rotate-[-5deg]"></div>
                        <div className="h-20 bg-red-400/30 rounded rotate-[3deg] ml-6"></div>
                        <div className="h-20 bg-purple-400/30 rounded rotate-[-2deg] ml-3"></div>
                      </div>
                    </div>
                    <div className="mx-4">
                      <svg className="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-gray-600 mb-4">WEEKLY PLAN</p>
                      <div className="space-y-4">
                        <div className="h-16 bg-white border-l-4 border-blue-600 rounded flex items-center px-6 shadow-sm">
                          <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                        </div>
                        <div className="h-16 bg-white border-l-4 border-orange-500 rounded flex items-center px-6 shadow-sm">
                          <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 2: Right Aligned */}
          <div className="flex justify-end">
            <Card className="bg-white border-0 shadow-xl w-full max-w-5xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1 flex items-center justify-center">
                    <div className="flex items-center justify-center gap-6 w-full">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                          <BookOpen className="h-12 w-12 text-purple-600" />
                        </div>
                        <span className="text-base text-gray-700 font-medium">Book 1</span>
                      </div>
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-green-700 font-semibold mb-2">BREAK</span>
                        <div className="w-24 h-24 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                          <Sparkles className="h-12 w-12 text-green-600" />
                        </div>
                        <span className="text-base text-gray-700 font-medium">Standalone</span>
                      </div>
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                          <BookOpen className="h-12 w-12 text-purple-600" />
                        </div>
                        <span className="text-base text-gray-700 font-medium">Book 2</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className={`text-3xl md:text-4xl font-bold text-[#1e3a4a] mb-4 ${playfairDisplay.className}`}>
                      Built for Series Readers
                    </h3>
                    <p className="text-lg text-gray-700">
                      TBR Tamer will plan out a series leading up to that next book release and won't trap you in endless back-to-back series.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 3: Left Aligned */}
          <div className="flex justify-start">
            <Card className="bg-white border-0 shadow-xl w-full max-w-5xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className={`text-3xl md:text-4xl font-bold text-[#1e3a4a] mb-4 ${playfairDisplay.className}`}>
                      A Plan That Actually Feels Good to Follow
                    </h3>
                    <p className="text-lg text-gray-700 mb-8">
                      Highly-rated reads are spaced out, genres are mixed, and every choice is intentional—so you don't burn out.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-7 w-7 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm text-green-600 font-semibold uppercase">Week 4</span>
                          <h4 className={`font-bold text-gray-900 mt-2 text-xl ${playfairDisplay.className}`}>The Love Hypothesis</h4>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-3 right-6 bg-[#1e3a4a] text-white text-sm rounded-lg px-4 py-3 shadow-lg max-w-[240px]">
                      <div className="absolute -bottom-1 left-6 w-3 h-3 bg-[#1e3a4a] rotate-45"></div>
                      <p className="text-xs leading-relaxed">This week is a standalone to give you a break from series reading.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 4: Right Aligned */}
          <div className="flex justify-end">
            <Card className="bg-white border-0 shadow-xl w-full max-w-5xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <div className="relative bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                      <div className="absolute top-6 right-6 bg-[#FDBA31] text-gray-900 text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        <span>12 Day Streak</span>
                      </div>
                      <div className="space-y-4 mt-12">
                        <div className="flex items-center gap-4">
                          <span className="text-base font-semibold text-gray-500 w-12">W1</span>
                          <div className="flex-1 h-12 bg-gray-100 rounded border border-gray-200"></div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-base font-semibold text-gray-700 w-12">W2</span>
                          <div className="flex-1 h-12 bg-white rounded border-2 border-gray-400 flex items-center justify-between px-4">
                            <span className="text-base font-medium text-gray-900">Fourth Wing</span>
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-base font-semibold text-gray-500 w-12">W3</span>
                          <div className="flex-1 h-12 bg-gray-100 rounded border border-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className={`text-3xl md:text-4xl font-bold text-[#1e3a4a] mb-4 ${playfairDisplay.className}`}>
                      Stay Consistent Without Pressure
                    </h3>
                    <p className="text-lg text-gray-700">
                      Track progress, keep a streak, and adjust your plan when life happens—without rebuilding everything.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
