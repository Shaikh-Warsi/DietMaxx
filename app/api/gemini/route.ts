import { GoogleGenerativeAI } from '@google/generative-ai';
import { FormData, RecommendationsData } from '@/types/form';
import { NextResponse } from 'next/server';

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

interface GeminiRequestBody {
  formData: FormData;
}

export async function POST(req: Request) {
  try {
    const { formData }: GeminiRequestBody = await req.json();

    // Validate formData
    if (!formData || !formData.name || !formData.age || !formData.gender || !formData.weight) {
      return NextResponse.json({ error: 'Missing required form data fields' }, { status: 400 });
    }

    if (typeof formData.age !== 'number' || typeof formData.weight !== 'number') {
      return NextResponse.json({ error: 'Age and Weight must be numbers' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    const prompt = `Based on the following user information, provide comprehensive dietary recommendations, including meal suggestions, nutritional advice, and general wellness tips. Focus on improving overall health, addressing potential deficiencies, and optimizing diet for their stated goals. The response should be well-structured and easy to understand.

User Information:
Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Weight: ${formData.weight} kg
Workout: ${formData.workout}
Breakfast: ${formData.breakfast}
Lunch: ${formData.lunch}
Dinner: ${formData.dinner}
Fast Food Consumption: ${formData.fast_food}
Fast Food Types: ${formData.fast_food_type}
Green Tea Consumption: ${formData.green_tea}
Nuts Consumption: ${formData.nuts}
Supplements: ${formData.supplements}
Brain Fog: ${formData.brain_fog}
Allergies: ${formData.allergies}

Provide a detailed response covering:
1. Overall dietary assessment and key areas for improvement.
2. Specific meal suggestions for breakfast, lunch, and dinner.
3. Snack recommendations.
4. Hydration advice.
5. Supplement recommendations (if applicable and safe).
6. General wellness tips related to diet and lifestyle.
7. Any warnings or considerations based on their input (e.g., allergies).

Format the response as a JSON object with the following structure:
{
  "immediate_needs": [
    { "title": "", "description": "" }
  ],
  "add_later": [
    { "title": "", "description": "" }
  ],
  "optional_boosters": [
    { "title": "", "description": "" }
  ]
}

Ensure that the content for each section is realistic and actionable. The AI should analyze the user's input to determine which recommendations fall into each category. For example, if a user is severely deficient in a vitamin, it should go under 'immediate_needs'. If it's a general health improvement, it can go under 'add_later' or 'optional_boosters'.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    console.log('Raw Gemini API response:', text);

    // Attempt to extract JSON string from the response, robustly handling markdown code blocks
    const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/);
    if (jsonMatch && jsonMatch[1]) {
      text = jsonMatch[1].trim();
    } else {
      // Fallback if no markdown json block is found, try to clean up common issues
      text = text.replace(/```(?:json)?\s*([\s\S]*?)\s*```/g, '$1').trim();
    }
    
    console.log('Processed Gemini API response:', text);

    let recommendations: RecommendationsData;
    try {
      recommendations = JSON.parse(text);

      // Basic validation to ensure the parsed object matches RecommendationsData structure
      if (!recommendations.immediate_needs || !Array.isArray(recommendations.immediate_needs) ||
          !recommendations.add_later || !Array.isArray(recommendations.add_later) ||
          !recommendations.optional_boosters || !Array.isArray(recommendations.optional_boosters)) {
        throw new Error('Parsed JSON does not match RecommendationsData structure.');
      }

      return NextResponse.json({ recommendations });
    } catch (parseError) {
      console.error('Error parsing or validating Gemini API response:', parseError);
      return NextResponse.json({ 
        error: 'Failed to parse recommendations from Gemini API',
        details: parseError instanceof Error ? parseError.message : 'Unknown parsing/validation error'
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return NextResponse.json({ 
      error: 'Failed to get recommendations',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}