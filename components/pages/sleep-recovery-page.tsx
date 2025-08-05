import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SleepRecoveryPage() {
  const sleepTips = [
    {
      category: "Sleep Hygiene",
      tips: ["Dark room", "Cool temperature", "No screens 1hr before bed", "Consistent schedule"],
      supplements: ["Melatonin", "Magnesium", "L-Theanine"],
    },
    {
      category: "Recovery Nutrition",
      tips: ["Post-workout protein", "Anti-inflammatory foods", "Adequate hydration", "Electrolyte balance"],
      supplements: ["Protein powder", "Omega-3", "Vitamin D", "Zinc"],
    },
    {
      category: "Stress Management",
      tips: ["Meditation", "Deep breathing", "Regular exercise", "Time in nature"],
      supplements: ["Ashwagandha", "Rhodiola", "B-Complex", "Magnesium"],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800">Sleep & Recovery</CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Quality sleep and recovery are essential for optimal health and performance
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sleepTips.map((category, index) => (
          <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">{category.category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Tips</h4>
                <div className="flex flex-wrap gap-1">
                  {category.tips.map((tip, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tip}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Helpful Supplements</h4>
                <div className="flex flex-wrap gap-1">
                  {category.supplements.map((supplement, i) => (
                    <Badge key={i} className="text-xs bg-indigo-100 text-indigo-800">
                      {supplement}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
