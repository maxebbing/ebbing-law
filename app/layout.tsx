import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Footer from './_components/footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mike Ebbing LL.M. – Rechtsanwalt Berlin',
    template: '%s | Mike Ebbing LL.M. – Rechtsanwalt',
  },
  description:
    'Rechtsanwalt Mike Ebbing LL.M. in Berlin-Zehlendorf. Buschgrabenweg 13, 14165 Berlin. Telefon: +49 (0)30 3810 9824.',
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#f5f7f9] font-body min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
