import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'
import FooterSection from '@/components/footer'

const inter = Inter({
  subsets: ['vietnamese'],
})

export const metadata: Metadata = {
  title: 'Go Stock ',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <FooterSection />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
