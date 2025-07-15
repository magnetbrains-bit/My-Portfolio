// app/not-found.tsx
'use client'
import Link from 'next/link'
import { Ghost } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <Ghost className="w-20 h-20 text-primary-600 mb-6 animate-bounce" />
      <h1 className="text-5xl font-bold mb-2 gradient-text">404</h1>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.<br />
        Let’s get you back on track.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold shadow hover:bg-primary-700 transition-colors duration-200">
          Back to Home
        </button>
      </Link>
    </div>
  )
} 