import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CarouselBuilder from './carousel-builder'

const ExampleCarousel = () => {
  const slides = [
    <Card key='1'>
      <CardHeader>
        <CardTitle>Slide 1</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the content for slide 1.</p>
      </CardContent>
    </Card>,
    <Card key='2'>
      <CardHeader>
        <CardTitle>Slide 2</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the content for slide 2.</p>
      </CardContent>
    </Card>,
    <Card key='3'>
      <CardHeader>
        <CardTitle>Slide 3</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the content for slide 3.</p>
      </CardContent>
    </Card>,
    <Card key='4'>
      <CardHeader>
        <CardTitle>Slide 4</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the content for slide 4.</p>
      </CardContent>
    </Card>,
    <Card key='5'>
      <CardHeader>
        <CardTitle>Slide 5</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the content for slide 5.</p>
      </CardContent>
    </Card>,
  ]

  const carouselOptions = {
    loop: true,
    align: 'start',
  }

  const breakpoints = {
    640: 2, // 2 slides per view on screens >= 640px
    1024: 3, // 3 slides per view on screens >= 1024px
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl mb-8 font-bold'>Example Carousel</h1>
      <CarouselBuilder
        slides={slides}
        options={carouselOptions}
        breakpoints={breakpoints}
        className='w-full'
      />
    </div>
  )
}

export default ExampleCarousel
