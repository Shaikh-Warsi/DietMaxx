import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GutHealthPage() {
  const gutHealthTips = [
    {
      title: "Probiotic-Rich Foods",
      description: "Incorporate fermented foods into your diet.",
      examples: ["Yogurt", "Kefir", "Sauerkraut", "Kimchi", "Kombucha"],
    },
    {
      title: "Prebiotic Fiber",
      description: "Feed your beneficial gut bacteria.",
      examples: ["Onions", "Garlic", "Bananas", "Oats", "Asparagus"],
    },
    {
      title: "Hydration",
      description: "Drink plenty of water throughout the day.",
      examples: ["Water", "Herbal teas", "Broth"],
    },
    {
      title: "Stress Management",
      description: "Stress can negatively impact gut health.",
      examples: ["Meditation", "Yoga", "Deep breathing exercises", "Mindfulness"],
    },
    {
      title: "Limit Processed Foods",
      description: "Reduce intake of sugar, unhealthy fats, and artificial additives.",
      examples: ["Fast food", "Sugary drinks", "Processed snacks", "Artificial sweeteners"],
    },
    {
      title: "Adequate Sleep",
      description: "Prioritize 7-9 hours of quality sleep per night.",
      examples: ["Consistent sleep schedule", "Dark, quiet room", "Avoid screens before bed"],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800">Gut Health Optimization</CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Tips and strategies for a healthy digestive system
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gutHealthTips.map((tip, index) => (
          <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">{tip.title}</CardTitle>
              <CardDescription className="text-green-600 font-semibold">{tip.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Examples</h4>
                <div className="flex flex-wrap gap-1">
                  {tip.examples.map((example, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {example}
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