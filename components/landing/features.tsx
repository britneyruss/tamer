import { Card, CardContent } from "@/components/ui/card";
import { 
  Download, 
  Calendar, 
  Brain, 
  Scale, 
  Settings, 
  Users 
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function Features() {
  const features = [
    {
      icon: Download,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Dead-Simple TBR Input",
      description: "Import your TBR from Goodreads or manually add books. However your list lives today, we make it easy to bring it home."
    },
    {
      icon: Calendar,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      title: "Weekly Schedule",
      description: "Generate a personalized weekly plan based on how fast you read. Conquer that beautiful chaos of books you've been hoarding."
    },
    {
      icon: Brain,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Smart Series Logic",
      description: "Stay current on series without binge fatigue. Meet a deadline for a new release in a series without worry."
    },
    {
      icon: Scale,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Balanced Schedule",
      description: "Highly-rated and anticipated books are sprinkled throughout your plan—never clumped. Follow authors and never miss what they are up to."
    },
    {
      icon: Settings,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Custom Settings",
      description: "Swap, skip, or push books forward without breaking your entire plan. Life happens, TBR Tamer works with you."
    },
    {
      icon: Users,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      title: "Share Your Plan",
      description: "Want to do a plan for a book club? Share with your followers? Share for people to follow along."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-[#CD7B67] font-semibold mb-2">
            FEATURES
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold text-[#1e3a4a] ${playfairDisplay.className}`}>
            Everything You Need to Tame Your TBR
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className={`${feature.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold text-[#1e3a4a] mb-2 ${playfairDisplay.className}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
