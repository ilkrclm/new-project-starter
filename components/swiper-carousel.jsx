import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SwiperCarouselBuilder = ({
  slides,
  options = {},
  breakpoints = {},
  className,
  ...props
}) => {
  const swiperRef = React.useRef(null)

  const defaultOptions = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      ...Object.entries(breakpoints).reduce((acc, [key, value]) => {
        acc[key] = { slidesPerView: value, slidesPerGroup: value }
        return acc
      }, {}),
    },
    ...options,
  }

  return (
    <div className={cn('relative', className)} {...props}>
      <Swiper {...defaultOptions} ref={swiperRef} className='w-full'>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <Button
        variant='outline'
        size='icon'
        className='swiper-button-prev absolute !-left-12 top-1/2 z-10 !h-10 !w-10 -translate-y-1/2'
      >
        <ChevronLeft className='!h-6 !w-6' />
      </Button>
      <Button
        variant='outline'
        size='icon'
        className='swiper-button-next !-h-10 absolute !-right-12 top-1/2 z-10 !w-10 shrink-0 -translate-y-1/2'
      >
        <ChevronRight className='!h-6 !w-6' />
      </Button>
    </div>
  )
}

export default SwiperCarouselBuilder
