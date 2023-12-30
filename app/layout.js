import { Poppins } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

const madeMountain = localFont({
  src: [
    {
      path: '../public/fonts/MADEMountain-Regular.otf',
      weight: '400',
    },
    {
      path: '../public/fonts/MADEMountain-Regular.otf',
      weight: '700',
    },
  ],
  variable: '--font-made-mountain',
});

const sdr = localFont({
  src: [
    {
      path: '../public/fonts/SundayRomantic-Regular DEMO.otf',
      weight: '400',
    },
    {
      path: '../public/fonts/SundayRomantic-Regular DEMO.otf',
      weight: '700',
    },
  ],
  variable: '--font-sdr',
});

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Web Monitoring 63',
  description: 'Tagline PKL 63',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${sdr.variable} ${madeMountain.variable}`}>
      <body>{children}</body>
    </html>
  );
}
