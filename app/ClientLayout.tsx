"use client"

import React, { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"


import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
        <div className="flex min-h-screen">
          <AppSidebar />
          <div className="flex-1">
            {/* Page Content */}
            <main className="container mx-auto px-4 py-6">{children}</main>
          </div>
        </div>

    </SidebarProvider>
  )
}
