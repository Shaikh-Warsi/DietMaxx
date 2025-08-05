import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { FormData } from "@/types/form"
import { AlertCircle } from "lucide-react"

interface FoodHabitsStepProps {
  formData: FormData;
  handleInputChange: (field: keyof FormData, value: string | number) => void;
  errors?: Record<string, string>;
}

export function FoodHabitsStep({ formData, handleInputChange, errors = {} }: FoodHabitsStepProps) {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Food Habits</CardTitle>
        <CardDescription className="text-gray-600">Let's understand your eating habits better</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label className="text-gray-700">Do you consume fast food?</Label>
          <RadioGroup
            value={formData.fast_food || ''}
            onValueChange={(value) => handleInputChange("fast_food", value)}
            className="flex gap-6"
          >
          {errors.fast_food && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.fast_food}</span>
            </div>
          )}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="fastfood-yes" />
              <Label htmlFor="fastfood-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="fastfood-no" />
              <Label htmlFor="fastfood-no">No</Label>
            </div>
          </RadioGroup>
          {formData.fast_food === "yes" && (
            <div className="mt-3">
              <Textarea
                id="fast_food_type"
                value={formData.fast_food_type || ''}
                onChange={(e) => handleInputChange("fast_food_type", e.target.value)}
                className={`min-h-[60px] border-gray-200 focus:border-blue-400 focus:ring-blue-400 ${errors.fast_food_type ? 'border-red-500' : ''}`}
                placeholder="What types of fast food do you usually eat?"
              />
              {errors.fast_food_type && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>{errors.fast_food_type}</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-3">
          <Label className="text-gray-700">Do you drink green tea?</Label>
          <RadioGroup
            value={formData.green_tea || ''}
            onValueChange={(value) => handleInputChange("green_tea", value)}
            className="flex gap-6"
          >
          {errors.green_tea && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.green_tea}</span>
            </div>
          )}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="green-tea-yes" />
              <Label htmlFor="green-tea-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="green-tea-no" />
              <Label htmlFor="green-tea-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label className="text-gray-700">Do you consume nuts?</Label>
          <RadioGroup
            value={formData.nuts || ''}
            onValueChange={(value) => handleInputChange("nuts", value)}
            className="flex gap-6"
          >
          {errors.nuts && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.nuts}</span>
            </div>
          )}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="nuts-yes" />
              <Label htmlFor="nuts-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="nuts-no" />
              <Label htmlFor="nuts-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}