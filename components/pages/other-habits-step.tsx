import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { FormData } from "@/types/form"
import { AlertCircle } from "lucide-react"

interface OtherHabitsStepProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string, name: keyof FormData) => void;
  errors?: Record<string, string>;
}

export function OtherHabitsStep({ formData, handleInputChange, errors = {} }: OtherHabitsStepProps) {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Other Habits & Concerns</CardTitle>
        <CardDescription className="text-gray-600">Almost there! Just a few more questions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label className="text-gray-700">Do you take any supplements?</Label>
          <RadioGroup
            value={formData.supplements || ''}
            onValueChange={(value) => handleInputChange(value, "supplements")}
            className="flex gap-6"
          >
          {errors.supplements && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.supplements}</span>
            </div>
          )}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="supplements-yes" />
              <Label htmlFor="supplements-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="supplements-no" />
              <Label htmlFor="supplements-no">No</Label>
            </div>
          </RadioGroup>
          {formData.supplements === "yes" && (
            <div className="mt-3">
              <Textarea
                id="supplements_detail"
                value={formData.supplements_detail || ''}
                onChange={(e) => handleInputChange(e, "supplements_detail")}
                className={`min-h-[60px] border-gray-200 focus:border-blue-400 focus:ring-blue-400 ${errors.supplements_detail ? 'border-red-500' : ''}`}
                placeholder="Please list the supplements you take"
              />
              {errors.supplements_detail && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>{errors.supplements_detail}</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-3">
          <Label className="text-gray-700">Do you experience brain fog?</Label>
          <RadioGroup
            value={formData.brain_fog || ''}
            onValueChange={(value) => handleInputChange(value, "brain_fog")}
            className="flex gap-6"
          >
          {errors.brain_fog && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.brain_fog}</span>
            </div>
          )}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="brain-fog-yes" />
              <Label htmlFor="brain-fog-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="brain-fog-no" />
              <Label htmlFor="brain-fog-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label className="text-gray-700">Do you have any allergies?</Label>
          <RadioGroup
            value={formData.allergies || ''}
            onValueChange={(value) => handleInputChange(value, "allergies")}
            className="flex gap-6"
          >
          {errors.allergies && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.allergies}</span>
            </div>
          )}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="allergies-yes" />
              <Label htmlFor="allergies-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="allergies-no" />
              <Label htmlFor="allergies-no">No</Label>
            </div>
          </RadioGroup>
          {formData.allergies === "yes" && (
            <div className="mt-3">
              <Textarea
                id="allergies_detail"
                value={formData.allergies_detail || ''}
                onChange={(e) => handleInputChange(e, "allergies_detail")}
                className={`min-h-[60px] border-gray-200 focus:border-blue-400 focus:ring-blue-400 ${errors.allergies_detail ? 'border-red-500' : ''}`}
                placeholder="Please list your allergies"
              />
              {errors.allergies_detail && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>{errors.allergies_detail}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}