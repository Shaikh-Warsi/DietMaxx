import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // For demonstration purposes, hardcode a valid user.
  // In a real application, you would query a database.
  if (email === 'test@example.com' && password === 'password123') {
    return NextResponse.json({ message: 'Login successful', success: true });
  } else {
    return NextResponse.json({ message: 'Invalid credentials', success: false }, { status: 401 });
  }
}