import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const containerVariants = cva('', {
  variants: {
    variant: {
      standard: 'container',
      narrow: 'container max-w-6xl',
      wide: 'container max-w-screen-2xl',
      full: 'w-full',
      combined: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'standard',
  },
})

const Container = ({
  children,
  as: Tag = 'div',
  variant,
  className,
  childClassName,
  ...rest
}) => {
  const containerClasses = cn(containerVariants({ variant }), className)

  return (
    <Tag className={containerClasses} {...rest}>
      {variant === 'combined' ? (
        <div className={cn('container mx-auto', childClassName)}>
          {children}
        </div>
      ) : (
        children
      )}
    </Tag>
  )
}

export default Container
