import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import { Icon } from '../base'
import { Button } from '../ui/button'

// Install Swiper modules

const SwiperComponent = ({
  Component,
  list,
  id = 'swiper',
  leftIcon,
  rightIcon,
  pagination,
  ...props
}) => {
  const swiperRef = useRef()

  return (
    <>
      <Swiper
        id={id}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
        {...props}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => <Component active={isActive} {...item} />}
          </SwiperSlide>
        ))}
        {leftIcon && rightIcon && (
          <div className='absolute-y-center z-10 flex w-full justify-between'>
            <Button
              type='button'
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label='Previous'
              size='icon'
              variant='outline'
            >
              {leftIcon}
            </Button>
            <Button
              type='button'
              onClick={() => swiperRef.current?.slideNext()}
              aria-label='Next'
              size='icon'
              variant='outline'
            >
              {rightIcon}
            </Button>
          </div>
        )}
        {pagination && (
          <div className='custom-pagination absolute-x-center !bottom-0 !left-1/2 z-10 flex justify-center space-x-2 [&>*.swiper-pagination-bullet]:rounded-none [&>span.swiper-pagination-bullet-active]:w-10 [&>span]:h-1 [&>span]:w-6 [&>span]:bg-foreground [&>span]:transition-all [&>span]:duration-300 '></div>
        )}
      </Swiper>
    </>
  )
}

export default SwiperComponent
