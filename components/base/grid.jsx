import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const gridVariants = cva('', {
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',

      // Add more column options as needed
    },
    gap: {
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      7: 'gap-7',
      8: 'gap-8',
      9: 'gap-9',
      10: 'gap-10',
      // Add more gap options as needed
    },
  },
  defaultVariants: {
    columns: 1,
    gap: 4,
  },
})

const Grid = ({ children, columns, gap, tag: Tag = 'div', className }) => {
  return (
    <Tag className={cn('grid', gridVariants({ columns, gap }), className)}>
      {children}
    </Tag>
  )
}

export default Grid
