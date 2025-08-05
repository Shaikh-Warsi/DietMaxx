import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function GutHealthPage() {
  const gutHealthTips = [
    {
      category: "Probiotics",
      description: "Beneficial bacteria for gut health",
      items: ["Yogurt", "Kefir", "Sauerkraut", "Kimchi", "Miso"],
      benefits: ["Improved digestion", "Better immunity", "Mood regulation"],
    },
    {
      category: "Prebiotics",
      description: "Food for beneficial bacteria",
      items: ["Garlic", "Onions", "Bananas", "Asparagus", "Oats"],
      benefits: ["Feeds good bacteria", "Improves gut barrier", "Reduces inflammation"],
    },
    {
      category: "Fiber",
      description: "Essential for digestive health",
      items: ["Beans", "Lentils", "Berries", "Vegetables", "Whole grains"],
      benefits: ["Regular bowel movements", "Satiety", "Blood sugar control"],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800">Gut Health Optimization</CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Your gut is your second brain - keep it healthy for optimal wellbeing
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gutHealthTips.map((tip, index) => (
          <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">{tip.category}</CardTitle>
              <CardDescription className="text-green-600">{tip.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Food Sources</h4>
                <div className="flex flex-wrap gap-1">
                  {tip.items.map((item, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Benefits</h4>
                <div className="flex flex-wrap gap-1">
                  {tip.benefits.map((benefit, i) => (
                    <Badge key={i} className="text-xs bg-green-100 text-green-800">
                      {benefit}
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
