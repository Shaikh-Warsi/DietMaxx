import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SleepRecoveryPage() {
  const sleepTips = [
    {
      title: "Consistent Sleep Schedule",
      description: "Go to bed and wake up at the same time each day, even on weekends.",
      benefits: ["Regulates circadian rhythm", "Improves sleep quality"],
    },
    {
      title: "Optimize Your Sleep Environment",
      description: "Make your bedroom dark, quiet, cool, and comfortable.",
      benefits: ["Reduces disturbances", "Promotes deeper sleep"],
    },
    {
      title: "Limit Caffeine and Alcohol",
      description: "Avoid stimulants and depressants close to bedtime.",
      benefits: ["Prevents sleep disruption", "Improves sleep architecture"],
    },
    {
      title: "Regular Exercise",
      description: "Engage in physical activity during the day, but not too close to bedtime.",
      benefits: ["Reduces stress", "Promotes relaxation", "Enhances sleep depth"],
    },
    {
      title: "Mindful Eating",
      description: "Avoid heavy meals, spicy foods, and excessive liquids before sleep.",
      benefits: ["Prevents indigestion", "Reduces nighttime awakenings"],
    },
    {
      title: "Stress Reduction Techniques",
      description: "Practice relaxation methods like meditation, deep breathing, or yoga.",
      benefits: ["Calms the mind", "Eases transition to sleep"],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800">Sleep & Recovery Optimization</CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Strategies for improving sleep quality and overall recovery
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sleepTips.map((tip, index) => (
          <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">{tip.title}</CardTitle>
              <CardDescription className="text-indigo-600 font-semibold">{tip.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Key Benefits</h4>
                <div className="flex flex-wrap gap-1">
                  {tip.benefits.map((benefit, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
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