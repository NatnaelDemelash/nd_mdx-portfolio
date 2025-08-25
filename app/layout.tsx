import { Quicksand } from 'next/font/google'
import './globals.css'
import Provider from '@/components/Provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const quickSand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Natnael Demelash | Front-End Developer',
  description:
    'Natnael Demelash – Front-End Developer based in Addis Ababa. I build modern, responsive, and interactive web applications using Next.js, React, Tailwind, and more.',
  keywords: [
    'Front-End Developer',
    'Next.js',
    'React',
    'Portfolio',
    'Natnael Demelash'
  ],
  authors: [
    { name: 'Natnael Demelash', url: 'https://your-portfolio-url.com' }
  ],
  themeColor: '#ab8a51',
  openGraph: {
    title: 'Natnael Demelash | Front-End Developer',
    description:
      'I build modern, responsive, and interactive web applications using Next.js, React, Tailwind, and more.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Natnael Portfolio',
    images: ['/og-image.png'],
    locale: 'en-US',
    type: 'website'
  },
  icons: {
    icon: '/favicon.png', // ✅ This sets your favicon
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={quickSand.className}>
        <Provider>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
