import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { Text } from '../base'

const headingVariants = cva('', {
  variants: {
    layout: {
      left: 'flex flex-col items-start text-left',
      center: 'flex flex-col items-center justify-center text-center',
      right: 'flex flex-col items-end text-right',
    },
  },
  defaultVariants: {
    layout: 'left',
  },
})

const Heading = ({
  layout,
  title = 'Heading',
  description,
  titleTag = 'h2',
  primaryLinkText,
  primaryLink = '#',
  secondaryLinkText,
  secondaryLink = '#',
  className,
  active,
  ...props
}) => {
  return (
    <div className={cn(headingVariants({ layout }), className)} {...props}>
      <Text variant={titleTag}>{title}</Text>

      {description && (
        <Text variant='p' className='mt-5'>
          {description}
        </Text>
      )}
      <div className='flex gap-4'>
        {primaryLinkText && (
          <Link
            href={primaryLink}
            className={buttonVariants({ variant: 'default' }) + ' mt-5 '}
          >
            {primaryLinkText}
          </Link>
        )}
        {secondaryLinkText && (
          <Link
            href={secondaryLink}
            className={buttonVariants({ variant: 'secondary' }) + ' mt-5 '}
          >
            {secondaryLinkText}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Heading
