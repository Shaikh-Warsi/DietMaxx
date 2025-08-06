"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('/home'); // Assuming '/home' is the route for the assessment form
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header with Menu Button */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="h-8 w-8" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DietMaxxing
            </h1>
          </div>
          <p className="text-sm text-gray-600 hidden md:block">AI-Powered Dietary Analysis & Optimization</p>
        </div>
      </div>

      {/* Page Content */}
      <main className="container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
          Unlock Your Health Potential
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
          DietMaxxing uses cutting-edge AI to provide personalized dietary analysis and optimization, helping you achieve your health and fitness goals.
        </p>
        <button
          onClick={handleGetStartedClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 animate-fade-in-up animation-delay-400"
        >
          Get Started Today
        </button>
      </main>

      {/* Footer */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-500 text-sm">Powered by Gemini 1.5 Flash AI | Built with ❤️ by DietMaxxing Team</p>
      </div>
    </div>
  )
}
