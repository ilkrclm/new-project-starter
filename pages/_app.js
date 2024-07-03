import { fontMono, fontSans, fontSerif } from '@/lib/fonts'
import SEO from '@/next-seo.config'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute='class' enableSystem={true}>
        <style jsx global>{`
          :root {
            --font-sans: ${fontSans.style.fontFamily};
            --font-serif: ${fontSerif.style.fontFamily};
            --font-mono: ${fontMono.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
