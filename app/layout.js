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
  description: 'Harmoni Dalam Tradisi Bersinergi Dengan Inovasi Berbakti Untuk Negeri',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${sdr.variable} ${madeMountain.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="1200x1200" />
      </head>
      <body>{children}</body>
    </html>
  );
}
