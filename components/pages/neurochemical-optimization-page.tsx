import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function NeurochemicalOptimizationPage() {
  const neurochemicals = [
    {
      name: "Dopamine",
      function: "Motivation & Reward",
      optimizers: ["Tyrosine", "Exercise", "Protein", "Cold exposure"],
      foods: ["Almonds", "Avocados", "Bananas", "Lean meats"],
      supplements: ["L-Tyrosine", "Mucuna Pruriens"],
    },
    {
      name: "Serotonin",
      function: "Mood & Sleep",
      optimizers: ["Tryptophan", "Sunlight", "Meditation", "Probiotics"],
      foods: ["Turkey", "Eggs", "Cheese", "Salmon"],
      supplements: ["5-HTP", "Tryptophan"],
    },
    {
      name: "GABA",
      function: "Calm & Relaxation",
      optimizers: ["Magnesium", "Yoga", "Deep breathing", "Green tea"],
      foods: ["Broccoli", "Lentils", "Oats", "Brown rice"],
      supplements: ["GABA", "Theanine", "Magnesium"],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800">Neurochemical Optimization</CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Optimize your brain chemistry for peak mental performance
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {neurochemicals.map((neuro, index) => (
          <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">{neuro.name}</CardTitle>
              <CardDescription className="text-purple-600 font-semibold">{neuro.function}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Natural Optimizers</h4>
                <div className="flex flex-wrap gap-1">
                  {neuro.optimizers.map((optimizer, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {optimizer}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Food Sources</h4>
                <div className="flex flex-wrap gap-1">
                  {neuro.foods.map((food, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {food}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Supplements</h4>
                <div className="flex flex-wrap gap-1">
                  {neuro.supplements.map((supplement, i) => (
                    <Badge key={i} className="text-xs bg-purple-100 text-purple-800">
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
