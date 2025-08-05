/**
 * Centralized type definitions for form data
 */

export interface FormData {
  name: string;
  age: number;
  gender: string;
  weight: number;
  workout: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  fast_food: string;
  fast_food_type: string;
  green_tea: string;
  nuts: string;
  supplements: string;
  supplements_detail: string;
  brain_fog: string;
  allergies: string;
  allergies_detail: string;
  medical_conditions: string;
  medications: string;
  smoking: string;
  alcohol: string;
  stress_level: number;
}

export interface RecommendationItem {
  title: string;
  description: string;
}

export interface RecommendationsData {
  immediate_needs: RecommendationItem[];
  add_later: RecommendationItem[];
  optional_boosters: RecommendationItem[];
}