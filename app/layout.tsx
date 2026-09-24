import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MotionProvider from './components/MotionProvider'
import { siteConfig } from './constants'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="motion-safe:scroll-smooth" lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <MotionProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
