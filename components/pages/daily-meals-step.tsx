import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface DailyMealsStepProps {
  formData: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string, name: keyof FormData) => void;
}

export function DailyMealsStep({ formData, handleInputChange }: DailyMealsStepProps) {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Daily Meals</CardTitle>
        <CardDescription className="text-gray-600">Describe what you typically eat for each meal</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="breakfast" className="text-gray-700">
            Breakfast
          </Label>
          <Textarea
            id="breakfast"
            value={formData.breakfast}
            onChange={(e) => handleInputChange(e, "breakfast")}
            className="min-h-[80px] border-gray-200 focus:border-blue-400 focus:ring-blue-400"
            placeholder="Describe your typical breakfast..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lunch" className="text-gray-700">
            Lunch
          </Label>
          <Textarea
            id="lunch"
            value={formData.lunch}
            onChange={(e) => handleInputChange(e, "lunch")}
            className="min-h-[80px] border-gray-200 focus:border-blue-400 focus:ring-blue-400"
            placeholder="Describe your typical lunch..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dinner" className="text-gray-700">
            Dinner
          </Label>
          <Textarea
            id="dinner"
            value={formData.dinner}
            onChange={(e) => handleInputChange(e, "dinner")}
            className="min-h-[80px] border-gray-200 focus:border-blue-400 focus:ring-blue-400"
            placeholder="Describe your typical dinner..."
          />
        </div>
      </CardContent>
    </Card>
  );
}