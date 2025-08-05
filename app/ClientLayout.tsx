"use client"

import React, { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { HomePage } from "@/components/pages/home-page"
import { VitaminOptimizationPage } from "@/components/pages/vitamin-optimization-page"
import { NeurochemicalOptimizationPage } from "@/components/pages/neurochemical-optimization-page"
import { GutHealthPage } from "@/components/pages/gut-health-page"
import { SleepRecoveryPage } from "@/components/pages/sleep-recovery-page"

import LoginPage from "@/components/pages/login-page"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export type PageType = "home" | "vitamin" | "neurochemical" | "gut-health" | "sleep-recovery"

export default function ClientLayout() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Temporary state for login status

  useEffect(() => {
    const handleNavigation = (event: CustomEvent) => {
      setCurrentPage(event.detail)
    }

    window.addEventListener("navigate", handleNavigation as EventListener)
    return () => window.removeEventListener("navigate", handleNavigation as EventListener)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "vitamin":
        return <VitaminOptimizationPage />
      case "neurochemical":
        return <NeurochemicalOptimizationPage />
      case "gut-health":
        return <GutHealthPage />
      case "sleep-recovery":
        return <SleepRecoveryPage />

      default:
      return <HomePage />;
  }
}

  return (
    <SidebarProvider>
      {isLoggedIn ? (
        <div className="flex min-h-screen">
          <AppSidebar setCurrentPage={setCurrentPage} />
          <div className="flex-1">
            {/* Page Content */}
            <main className="container mx-auto px-4 py-6">{renderPage()}</main>
          
          </div>
        </div>
      ) : (
        <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </SidebarProvider>
  )
}
