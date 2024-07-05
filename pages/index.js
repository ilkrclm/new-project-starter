import Layout from '@/components/layout'
import { NextSeo } from 'next-seo'

export default function Home({ data }) {
  return (
    <>
      <NextSeo
        title='Ana Sayfa'
        description='Home'
        canonical={process.env.NEXT_PUBLIC_URL}
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          siteName: 'SiteName',
        }}
      />
      <Layout></Layout>
    </>
  )
}

export const getStaticProps = async () => {
  // fetch the data from cms
  const data = []

  return {
    props: {
      data,
    },
  }
}
