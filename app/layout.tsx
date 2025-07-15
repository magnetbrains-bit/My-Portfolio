import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Himanshu Raj - Data Professional Portfolio',
  description: 'Data professional with expertise in analytics, machine learning, and data engineering. View my projects and experience.',
  keywords: 'data analyst, data scientist, machine learning, analytics, portfolio',
  authors: [{ name: 'Himanshu Raj' }],
  openGraph: {
    title: 'Himanshu Raj - Data Professional Portfolio',
    description: 'Data professional with expertise in analytics, machine learning, and data engineering.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 