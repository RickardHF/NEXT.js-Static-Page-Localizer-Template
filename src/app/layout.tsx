import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LocalizerWrapper } from 'nextjs-static-page-localizer'

const inter = Inter({ subsets: ['latin'] })
const config = require("@/messages/config")

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LocalizerWrapper configuration={config}>
          <Header />
          {children}
        </LocalizerWrapper>
      </body>
    </html>
  )
}
