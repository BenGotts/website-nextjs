import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ben Gottschalk',
  description: 'A website for Ben Gottschalk',
  icons: {
    icon: '/bg.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='icon' href='/bg.png' sizes='any' />
      <body className={inter.className}>
        <Providers>
          <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-1 mb-20'>
          {children}
          </main>
          <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
