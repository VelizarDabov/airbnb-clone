import { Inter } from 'next/font/google'
import './globals.css'
import logo from './favicon.ico'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb-clone',
  description: 'Generated by create next app',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}