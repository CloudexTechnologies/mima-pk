import type { Metadata } from 'next'
import { DM_Sans, Dancing_Script } from 'next/font/google'
import './globals.css'
import ImagePrefetcher from '@/components/ImagePrefetcher'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MIMA Group | Building Pakistan\'s Landmark Spaces Since 1959',
    template: '%s | MIMA Group',
  },
  description:
    'Integrated construction, MEP, interiors, and facility management solutions delivered with precision, quality, and technical expertise.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dancingScript.variable}`}>
      <body style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}>
        {children}
        <ImagePrefetcher />
      </body>
    </html>
  )
}
