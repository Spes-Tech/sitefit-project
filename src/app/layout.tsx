import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'


import Section from './components/Section'
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Site Fit',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <Header />
      <main className="container mx-auto p-4">
        {/* Conteúdo da sua página */}
      </main>
        {children}

        <div>
          <Section /> {/* Usando o componente Section */}
        </div>
      </body>
    </html>
  )
}
