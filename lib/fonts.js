import {
  Inter as FontSans,
  Playfair_Display as FontSerif,
} from 'next/font/google'

import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '700', '900'],
})
export const fontSerif = FontSerif({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '700', '900'],
})

export const fontMono = localFont({
  src: '../styles/fonts/GeistMonoVF.woff2',
  variable: '--font-mono',
  display: 'swap',
  weight: '300 400 500 700 900',
})
