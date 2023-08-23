import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import Section from './components/Section'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Site Fit',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header className="h-16 border">
          <nav className="mx-auto max-w-5xl px-4 lg:px-8">Header</nav>
        </header>
        {children}

        <div>
          <Section /> {/* Usando o componente Section */}
        </div>
      </body>
    </html>
  )
}
