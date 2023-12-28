import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight:['100','300','400','500','700'], 
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}
