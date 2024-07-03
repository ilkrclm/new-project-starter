import { Button } from '@/components/ui/button'

const CTASection = ({ heading, subheading, ctaText, ctaLink }) => {
  return (
    <div className='space-y-4 p-8 text-center'>
      <h2 className='text-3xl font-bold'>{heading}</h2>
      <p className='text-xl'>{subheading}</p>
      <Button asChild size='lg'>
        <a href={ctaLink}>{ctaText}</a>
      </Button>
    </div>
  )
}

export default CTASection
