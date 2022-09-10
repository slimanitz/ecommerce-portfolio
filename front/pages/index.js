import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Home() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <Image
                src={'/carousel-1.jpg'}
                layout="fixed"
                width={200}
                height={200}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/carousel-2.jpg'}
                layout="fixed"
                width={200}
                height={200}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/carousel-3.jpg'}
                layout="fixed"
                width={200}
                height={200}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
