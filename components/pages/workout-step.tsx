import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormData } from "@/types/form";
import { AlertCircle } from "lucide-react";

interface WorkoutStepProps {
  formData: FormData;
  handleInputChange: (field: keyof FormData, value: string | number) => void;
  errors?: Record<string, string>;
}

export function WorkoutStep({ formData, handleInputChange, errors = {} }: WorkoutStepProps) {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Workout Information</CardTitle>
        <CardDescription className="text-gray-600">Tell us about your workout routine</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label className="text-gray-700">Do you workout?</Label>
          <RadioGroup
            value={formData.workout || ''}
            onValueChange={(value) => handleInputChange("workout", value)}
            className="flex gap-6"
          >
          {errors.workout && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.workout}</span>
            </div>
          )}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="workout-yes" />
              <Label htmlFor="workout-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="workout-no" />
              <Label htmlFor="workout-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}