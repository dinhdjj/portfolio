import './globals.css'
import { Be_Vietnam_Pro } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'

export const metadata = {
  title: 'Dinhdjj - Portfolio',
  description: 'Dinhdjj - Portfolio',
}

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  variable: '--font-be-vietnam-pro',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const isDev = process.env.NODE_ENV === 'development'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${beVietnamPro.variable}`}>
      <body
        className={`${
          isDev ? 'debug-screens' : ''
        } bg-slate-900 bg-[url('/background-grid-60.svg')] bg-fixed bg-[center_top_15%] bg-no-repeat text-slate-400 md:bg-[left_15%_top_15%]`}
      >
        <div className='container mx-auto px-4 py-6 md:px-8 xl:px-12'>
          <Header />
          {children}
          <Footer className='mt-36' />
        </div>
      </body>
    </html>
  )
}
