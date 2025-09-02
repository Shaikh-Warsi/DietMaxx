import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VitaminOptimizationPage() {
  const vitamins = [
    {
      name: "Vitamin D3",
      dosage: "1000-4000 IU daily",
      benefits: ["Bone health", "Immune support", "Mood regulation"],
      deficiencySymptoms: ["Fatigue", "Bone pain", "Depression"],
      foodSources: ["Fatty fish", "Egg yolks", "Fortified foods"],
    },
    {
      name: "Vitamin B12",
      dosage: "2.4 mcg daily",
      benefits: ["Energy production", "Nerve function", "Red blood cell formation"],
      deficiencySymptoms: ["Fatigue", "Memory problems", "Numbness"],
      foodSources: ["Meat", "Fish", "Dairy products"],
    },
    {
      name: "Vitamin C",
      dosage: "65-90 mg daily",
      benefits: ["Immune support", "Collagen synthesis", "Antioxidant"],
      deficiencySymptoms: ["Scurvy", "Poor wound healing", "Fatigue"],
      foodSources: ["Citrus fruits", "Berries", "Bell peppers"],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800">Vitamin Optimization</CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Essential vitamins for optimal health and performance
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vitamins.map((vitamin, index) => (
          <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">{vitamin.name}</CardTitle>
              <CardDescription className="text-blue-600 font-semibold">{vitamin.dosage}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Benefits</h4>
                <div className="flex flex-wrap gap-1">
                  {vitamin.benefits.map((benefit, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Deficiency Symptoms</h4>
                <div className="flex flex-wrap gap-1">
                  {vitamin.deficiencySymptoms.map((symptom, i) => (
                    <Badge key={i} variant="destructive" className="text-xs">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Food Sources</h4>
                <div className="flex flex-wrap gap-1">
                  {vitamin.foodSources.map((source, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {source}
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