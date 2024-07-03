import Layout from '@/components/layout'
import { NextSeo } from 'next-seo'

export default function SinglePage({ data }) {
  return (
    <>
      <NextSeo
        title='SinglePage'
        description='SinglePage description'
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
      <Layout>
        <section></section>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  let paths = []

  let pages = []
  pages.forEach((item) => {
    item.slug != undefined && paths.push({ params: { slug: item.slug } })
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  const data = []

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
  }
}
