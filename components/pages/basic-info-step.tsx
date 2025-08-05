import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormData } from '@/types/form';
import { AlertCircle } from 'lucide-react';

interface BasicInfoStepProps {
  formData: FormData;
  handleInputChange: (field: keyof FormData, value: string | number) => void;
  errors?: Record<string, string>;
}

export function BasicInfoStep({ formData, handleInputChange, errors = {} }: BasicInfoStepProps) {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Basic Information</CardTitle>
        <CardDescription className="text-gray-600">Let's start with some basic details about you</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-700">
            Name
          </Label>
          <Input
            id="name"
            value={formData.name || ''}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`h-12 border-gray-200 focus:border-blue-400 focus:ring-blue-400 ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.name}</span>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="age" className="text-gray-700">
            Age
          </Label>
          <Input
            id="age"
            type="number"
            value={formData.age || ''}
            onChange={(e) => handleInputChange("age", parseInt(e.target.value) || '')}
            className={`h-12 border-gray-200 focus:border-blue-400 focus:ring-blue-400 ${errors.age ? 'border-red-500' : ''}`}
            placeholder="Enter your age"
          />
          {errors.age && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.age}</span>
            </div>
          )}
        </div>
        <div className="space-y-3">
          <Label className="text-gray-700">Gender</Label>
          <RadioGroup
            value={formData.gender || ''}
            onValueChange={(value) => handleInputChange("gender", value)}
            className="flex gap-6"
          >
          {errors.gender && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.gender}</span>
            </div>
          )}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="weight" className="text-gray-700">
            Current Weight (kg)
          </Label>
          <Input
            id="weight"
            type="number"
            value={formData.weight || ''}
            onChange={(e) => handleInputChange("weight", parseInt(e.target.value) || '')}
            className={`h-12 border-gray-200 focus:border-blue-400 focus:ring-blue-400 ${errors.weight ? 'border-red-500' : ''}`}
            placeholder="Enter weight in kg"
          />
          {errors.weight && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.weight}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}