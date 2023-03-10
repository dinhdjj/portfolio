import './globals.css'
import { Be_Vietnam_Pro } from 'next/font/google'

export const metadata = {
  title: 'Dinhdjj - Portfolio',
  description: 'Dinhdjj - Portfolio',
}

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  variable: '--font-be-vietnam-pro',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${beVietnamPro.variable}`}>
      <body>{children}</body>
    </html>
  )
}
