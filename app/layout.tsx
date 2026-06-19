import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mike Ebbing LL.M. – Rechtsanwalt',
  description:
    'Rechtsanwalt Mike Ebbing LL.M. · Buschgrabenweg 13 · 14165 Berlin · Telefon +49 (0)30 3810 9824',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={cormorant.variable}>
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
