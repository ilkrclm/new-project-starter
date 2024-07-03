import ExampleCardBuilder from '@/components/card-builder-example'
import ExampleCarousel from '@/components/carousel-builder-example'
import ParentComponent from '@/components/example-form-builder'
import Layout from '@/components/layout'
import ExampleLayoutBuilder from '@/components/layout-builder-example'
import ExampleSwiperCarousel from '@/components/swiper-carousel-example'
import { NextSeo } from 'next-seo'

export default function Home({ data }) {
  return (
    <>
      <NextSeo
        title='Home'
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
      <Layout>
        <section>
          {/* <ParentComponent /> */}
          <ExampleLayoutBuilder />
          <ExampleCardBuilder />
          {/* <ExampleCarousel />
          <ExampleSwiperCarousel /> */}
        </section>
      </Layout>
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
