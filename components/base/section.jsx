import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const sectionVariants = cva('', {
  variants: {
    background: {
      default: '',
      dark: 'bg-gray-900 text-white',
      primary: 'bg-primary text-white',
    },
    gradient: {
      default: '',
      primary: 'bg-gradient-to-br from-primary to-secondary text-white',
    },
    color: {
      default: '',
      primary: 'bg-primary text-white',
    },
    backgroundImage: {
      default: '',
      pattern: 'bg-pattern-image text-white',
    },
  },
  defaultVariants: {
    background: 'default',
    gradient: 'default',
    color: 'default',
    backgroundImage: 'default',
  },
})

const Section = ({
  children,
  className,
  background,
  gradient,
  color,
  backgroundImage,
}) => {
  return (
    <section
      className={cn(
        sectionVariants({
          background,
          gradient,
          color,
          backgroundImage,
        }),
        className,
      )}
    >
      {children}
    </section>
  )
}

export default Section
