import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CarouselBuilder = ({
  slides,
  options = {},
  breakpoints = {},
  className,
  ...props
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    breakpoints: Object.entries(breakpoints).reduce((acc, [key, value]) => {
      acc[key] = { slidesToScroll: value, slidesPerView: value }
      return acc
    }, {}),
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [slidesPerView, setSlidesPerView] = useState(1)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    const handleResize = () => {
      if (!emblaApi) return
      const width = window.innerWidth
      let newSlidesPerView = 1

      Object.entries(breakpoints)
        .sort((a, b) => b[0] - a[0])
        .forEach(([breakpoint, slides]) => {
          if (width >= parseInt(breakpoint)) {
            newSlidesPerView = slides
          }
        })

      setSlidesPerView(newSlidesPerView)
      emblaApi.reInit()
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [emblaApi, breakpoints])

  return (
    <div className={cn('relative', className)} {...props}>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className='min-w-0 shrink-0 flex-grow-0 basis-full'
              style={{ flex: `0 0 calc(100% / ${slidesPerView})` }}
            >
              <div className='p-2'>{slide}</div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant='outline'
        size='icon'
        className='absolute -left-10 top-1/2 -translate-y-1/2'
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className='h-4 w-4' />
      </Button>
      <Button
        variant='outline'
        size='icon'
        className='absolute -right-10 top-1/2 -translate-y-1/2'
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className='h-4 w-4' />
      </Button>
    </div>
  )
}

export default CarouselBuilder
