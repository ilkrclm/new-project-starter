import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import HeroSection from './sections/hero'
import FeaturesSection from './sections/features'
import TestimonialsSection from './sections/testimonial'
import CTASection from './sections/cta'

const sectionComponents = {
  hero: HeroSection,
  features: FeaturesSection,
  testimonials: TestimonialsSection,
  cta: CTASection,
}

const LayoutBuilder = ({ sections }) => {
  return (
    <div className='container mx-auto space-y-12 px-4 py-8'>
      {sections.map((section, index) => (
        <LayoutSection key={index} {...section} />
      ))}
    </div>
  )
}

const LayoutSection = ({ type, title, content }) => {
  const SectionComponent = sectionComponents[type]

  if (!SectionComponent) {
    console.warn(`Unknown section type: ${type}`)
    return null
  }

  return (
    <Card className={cn('overflow-hidden')}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className='p-0'>
        <SectionComponent {...content} />
      </CardContent>
    </Card>
  )
}

export default LayoutBuilder
