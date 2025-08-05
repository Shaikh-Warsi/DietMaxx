"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, AlertCircle, MessageSquare } from "lucide-react"
import { ResultsPage } from "./results-page"
import { Skeleton } from "@/components/ui/skeleton"
import { Progress } from "@/components/ui/progress"
import { BasicInfoStep } from "./basic-info-step"
import { WorkoutStep } from "./workout-step"
import { DailyMealsStep } from "./daily-meals-step"
import { FoodHabitsStep } from "./food-habits-step"
import { OtherHabitsStep } from "./other-habits-step"
import { MedicalHistoryStep } from "./medical-history-step"
import { Chatbot } from "./Chatbot"
import { FormData, RecommendationsData } from "@/types/form"
import { useForm } from "@/hooks/use-form"
import { validateFormData } from "@/lib/validation"

export function HomePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendationsData | null>(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const totalSteps = 6; // Define total steps for the progress bar
  
  const initialValues: FormData = {
    name: "",
    age: 0,
    gender: "",
    weight: 0,
    workout: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    fast_food: "",
    fast_food_type: "",
    green_tea: "",
    nuts: "",
    supplements: "",
    supplements_detail: "",
    brain_fog: "",
    allergies: "",
    allergies_detail: "",
    medical_conditions: "",
    medications: "",
    smoking: "",
    alcohol: "",
    stress_level: 0
  };
  
  const {
    formData,
    errors,
    loading,
    handleInputChange,
    resetForm,
    validateForm
  } = useForm({
    initialValues,
    validate: validateFormData
  });

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setError(null);
    
    // Validate based on current step
    let fieldsToValidate: (keyof FormData)[] = [];
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ['name', 'age', 'gender', 'weight'];
        break;
      case 2:
        fieldsToValidate = ['workout'];
        break;
      case 3:
        fieldsToValidate = ['breakfast', 'lunch', 'dinner'];
        break;
      case 4:
        fieldsToValidate = ['fast_food', 'green_tea', 'nuts'];
        if (formData.fast_food === 'yes') fieldsToValidate.push('fast_food_type');
        break;
      case 5:
        fieldsToValidate = ['supplements', 'brain_fog', 'allergies'];
        if (formData.supplements === 'yes') fieldsToValidate.push('supplements_detail');
        if (formData.allergies === 'yes') fieldsToValidate.push('allergies_detail');
        break;
      case 6:
        fieldsToValidate = ['medical_conditions', 'medications', 'smoking', 'alcohol', 'stress_level'];
        break;
    }
    
    // Check if current step fields are valid
    const stepErrors = validateFormData(formData);
    if (stepErrors) {
      const hasStepErrors = fieldsToValidate.some(field => stepErrors[field]);
      if (hasStepErrors) {
        setError('Please fill in all required fields correctly before proceeding.');
        return;
      }
    }
    
    // If on final step, submit the form
    if (currentStep === totalSteps) {
      try {
        // Import the API client
        const { apiClient } = await import('@/lib/api');
        
        const result = await apiClient.getRecommendations(formData);
        
        if (result.data) {
          setRecommendations(result.data.recommendations);
          setShowResults(true);
        } else {
          setError(result.details || result.error || 'Failed to get recommendations');
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setError('Failed to get recommendations. Please try again.');
      }
    } else {
      // Otherwise, go to next step
      nextStep();
    }
  };

  const handleReset = () => {
    setShowResults(false);
    setCurrentStep(1);
    setRecommendations(null);
    setIsChatbotOpen(false);
    setError(null);
    resetForm();
  }

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  if (showResults) {
    return <ResultsPage onReset={handleReset} recommendations={recommendations} />;
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto space-y-6 flex flex-col items-center justify-center h-screen">
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Analyzing Your Diet...</CardTitle>
            <CardDescription>Please wait while we generate your personalized recommendations.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <Progress value={null} className="w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfoStep
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );

      case 2:
        return (
          <WorkoutStep
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );

      case 3:
        return (
          <DailyMealsStep
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );

      case 4:
        return (
          <FoodHabitsStep
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );

      case 5:
        return (
          <OtherHabitsStep
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );

      case 6:
        return (
          <MedicalHistoryStep
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">DietMaxx Assessment</CardTitle>
          <CardDescription className="text-center">Step {currentStep} of {totalSteps}</CardDescription>
          <Progress value={(currentStep / totalSteps) * 100} className="w-full mt-4" />
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          {renderStep()}
          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <Button onClick={prevStep} variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" /> Previous
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button onClick={handleSubmit} className="ml-auto">
                Next <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className={`ml-auto flex items-center gap-2 h-12 px-6 ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700'}`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    Get Recommendations
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Button
        onClick={toggleChatbot}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-lg"
        aria-label="Toggle Chatbot"
      >
        {isChatbotOpen ? 'X' : <MessageSquare className="h-6 w-6" />}
      </Button>

      {isChatbotOpen && <Chatbot onClose={toggleChatbot} />}
    </div>
  );
};
