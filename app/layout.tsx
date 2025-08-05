"use client";

import React from "react"
import ClientLayout from "./ClientLayout"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

import './globals.css'
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout() {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          <ClientLayout />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
