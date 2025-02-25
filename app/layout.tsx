import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from '@vercel/analytics/next';

import { track } from '@vercel/analytics';
 
function SignupButton() {
  return (
    <button
      onClick={() => {
        track('RedirectButton');
        // ... other logic
      }}
    >
      Sign Up
    </button>
  );
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxury Bets",
  description: "Acceso exclusivo a experiencias de apuestas de lujo",
    generator: 'v0.dev'
}



import './globals.css'
