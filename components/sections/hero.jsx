import { Button } from '@/components/ui/button'

const HeroSection = ({ heading, subheading, ctaText, ctaLink, image }) => {
  return (
    <div className='flex flex-col items-center justify-between p-8 md:flex-row'>
      <div className='space-y-4 md:w-1/2'>
        <h1 className='text-4xl font-bold'>{heading}</h1>
        <p className='text-xl'>{subheading}</p>
        <Button asChild>
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </div>
      <div className='mt-8 md:mt-0 md:w-1/2'>
        <img src={image} alt='Hero' className='h-auto w-full rounded-lg' />
      </div>
    </div>
  )
}

export default HeroSection
