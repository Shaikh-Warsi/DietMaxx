import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { FormData } from '@/types/form';

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

import { ChatMessage } from '@/types/chat';

interface ChatRequestBody {
  history: ChatMessage[];
  message: string;
  formData: FormData;
}

export async function POST(req: Request) {
  try {
    const { history, message, formData } = await req.json() as ChatRequestBody;

    // Validate required inputs
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
      history: history.map((item: ChatMessage) => ({
        role: item.role === 'user' ? 'user' : 'model',
        parts: item.parts,
      })),
    });

    // Create a structured prompt with user information
    const initialPrompt = `Based on the following user information and habits:\n
${Object.entries(formData)
  .filter(([_, value]) => value) // Only include non-empty values
  .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
  .join('\n')}

Answer the following question: ${message}`;

    const result = await chat.sendMessage(initialPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ 
      error: 'Failed to get response from Gemini API',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}