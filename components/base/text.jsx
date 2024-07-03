import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const textVariants = cva('font-medium text-foreground', {
  variants: {
    variant: {
      h1: 'text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-balance',
      h2: 'text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif',
      h3: 'text-2xl sm:text-3xl lg:text-4xl font-semibold',
      h4: 'text-xl sm:text-2xl lg:text-3xl',
      h5: 'text-lg sm:text-xl lg:text-2xl',
      h6: 'text-base sm:text-lg lg:text-xl font-semibold',
      p: 'text-muted-foreground text-sm lg:text-base',
      small: 'text-[10px] lg:text-xs xl:text-xs',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})

const Text = ({ variant = 'p', className, children, ...props }) => {
  const TextComponent =
    variant === 'h1'
      ? 'h1'
      : variant === 'h2'
      ? 'h2'
      : variant === 'h3'
      ? 'h3'
      : variant === 'h4'
      ? 'h4'
      : variant === 'h5'
      ? 'h5'
      : variant === 'h6'
      ? 'h6'
      : variant === 'small'
      ? 'small'
      : 'p'

  return (
    <TextComponent
      className={cn(textVariants({ variant, className }))}
      {...props}
    >
      {children}
    </TextComponent>
  )
}

export default Text
