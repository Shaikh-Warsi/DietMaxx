import { FormData } from '@/types/form';

/**
 * Validates form data before submission
 * @param formData The form data to validate
 * @returns An object with field names as keys and error messages as values, or null if validation passes
 */
export function validateFormData(formData: FormData): Record<string, string> | null {
  const errors: Record<string, string> = {};
  
  // Basic info validation
  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!formData.age || formData.age < 1) {
    errors.age = 'Please enter a valid age';
  }
  
  if (!formData.gender?.trim()) {
    errors.gender = 'Gender selection is required';
  }
  
  if (!formData.weight || formData.weight < 1) {
    errors.weight = 'Please enter a valid weight';
  }
  
  // Workout validation
  if (!formData.workout?.trim()) {
    errors.workout = 'Please indicate if you workout';
  }
  
  // Daily meals validation
  if (!formData.breakfast?.trim()) {
    errors.breakfast = 'Please describe your typical breakfast';
  }
  
  if (!formData.lunch?.trim()) {
    errors.lunch = 'Please describe your typical lunch';
  }
  
  if (!formData.dinner?.trim()) {
    errors.dinner = 'Please describe your typical dinner';
  }
  
  // Food habits validation
  if (!formData.fast_food?.trim()) {
    errors.fast_food = 'Please indicate if you consume fast food';
  }
  
  if (formData.fast_food === 'yes' && !formData.fast_food_type?.trim()) {
    errors.fast_food_type = 'Please specify what type of fast food you consume';
  }
  
  if (!formData.green_tea?.trim()) {
    errors.green_tea = 'Please indicate if you drink green tea';
  }
  
  if (!formData.nuts?.trim()) {
    errors.nuts = 'Please indicate if you eat nuts';
  }
  
  // Other habits validation
  if (!formData.supplements?.trim()) {
    errors.supplements = 'Please indicate if you take supplements';
  }
  
  if (formData.supplements === 'yes' && !formData.supplements_detail?.trim()) {
    errors.supplements_detail = 'Please specify what supplements you take';
  }
  
  if (!formData.brain_fog?.trim()) {
    errors.brain_fog = 'Please indicate if you experience brain fog';
  }
  
  if (!formData.allergies?.trim()) {
    errors.allergies = 'Please indicate if you have allergies';
  }
  
    if (formData.allergies === 'yes' && !formData.allergies_detail) {
      errors.allergies_detail = 'Please specify your allergies.';
    }

    // Medical History & Lifestyle Step (Step 6)
    if (!formData.medical_conditions) {
      errors.medical_conditions = 'Please provide any medical conditions.';
    }
    if (!formData.medications) {
      errors.medications = 'Please list any medications you are taking.';
    }
    if (!formData.smoking) {
      errors.smoking = 'Please indicate if you smoke.';
    }
    if (!formData.alcohol) {
      errors.alcohol = 'Please indicate if you consume alcohol.';
    }
    if (!formData.stress_level || formData.stress_level < 1 || formData.stress_level > 10) {
      errors.stress_level = 'Please rate your stress level between 1 and 10.';
    }
  
  return Object.keys(errors).length > 0 ? errors : null;
}