import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Betmund — Your World Cup. Your League.',
  description:
    'Create a private league, predict the 2026 World Cup, and compete with friends — round by round, match by match.',
  metadataBase: new URL('https://www.betmund.com'),
  openGraph: {
    title: 'Betmund — Your World Cup. Your League.',
    description:
      'Create a private league, predict the 2026 World Cup, and compete with friends.',
    url: 'https://www.betmund.com',
    siteName: 'Betmund',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
