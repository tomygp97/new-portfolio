import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <title>Tomi Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <div>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}