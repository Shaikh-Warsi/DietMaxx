"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FormData } from "@/types/form"

interface MedicalHistoryStepProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string, name: keyof FormData) => void;
  errors: Partial<FormData>;
}

export function MedicalHistoryStep({
  formData,
  handleInputChange,
  errors,
}: MedicalHistoryStepProps) {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Medical History & Lifestyle</CardTitle>
        <CardDescription className="text-gray-700">Please provide details about your medical history and lifestyle habits.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="medical_conditions">Any existing medical conditions? (e.g., diabetes, hypertension)</Label>
          <Textarea
            id="medical_conditions"
            name="medical_conditions"
            placeholder="List any medical conditions..."
            value={formData.medical_conditions || ''}
            onChange={(e) => handleInputChange(e, 'medical_conditions')}
            className={errors.medical_conditions ? 'border-red-500' : ''}
          />
          {errors.medical_conditions && <p className="text-red-500 text-sm">{errors.medical_conditions}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="medications">Are you currently taking any medications?</Label>
          <Textarea
            id="medications"
            name="medications"
            placeholder="List any medications..."
            value={formData.medications || ''}
            onChange={(e) => handleInputChange(e, 'medications')}
            className={errors.medications ? 'border-red-500' : ''}
          />
          {errors.medications && <p className="text-red-500 text-sm">{errors.medications}</p>}
        </div>

        <div className="space-y-2">
          <Label>Do you smoke?</Label>
          <RadioGroup
            name="smoking"
            value={formData.smoking || ''}
            onValueChange={(value) => handleInputChange(value, 'smoking')}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="smoking-yes" />
              <Label htmlFor="smoking-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="smoking-no" />
              <Label htmlFor="smoking-no">No</Label>
            </div>
          </RadioGroup>
          {errors.smoking && <p className="text-red-500 text-sm">{errors.smoking}</p>}
        </div>

        <div className="space-y-2">
          <Label>Do you consume alcohol?</Label>
          <RadioGroup
            name="alcohol"
            value={formData.alcohol || ''}
            onValueChange={(value) => handleInputChange(value, 'alcohol')}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="alcohol-yes" />
              <Label htmlFor="alcohol-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="alcohol-no" />
              <Label htmlFor="alcohol-no">No</Label>
            </div>
          </RadioGroup>
          {errors.alcohol && <p className="text-red-500 text-sm">{errors.alcohol}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="stress_level">On a scale of 1-10, how would you rate your stress level?</Label>
          <Input
            id="stress_level"
            name="stress_level"
            type="number"
            placeholder="e.g., 7"
            value={formData.stress_level || ''}
            onChange={(e) => handleInputChange(e, 'stress_level')}
            className={errors.stress_level ? 'border-red-500' : ''}
          />
          {errors.stress_level && <p className="text-red-500 text-sm">{errors.stress_level}</p>}
        </div>
      </CardContent>
    </Card>
  );
}