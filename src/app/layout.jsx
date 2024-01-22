import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'

export const metadata = {
  title: 'Ben Gottschalk',
  description: 'A website for Ben Gottschalk',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='icon' href='/bg.png' sizes='any' />
      <body>
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
