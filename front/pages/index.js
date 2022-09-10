/* eslint-disable @next/next/no-img-element */
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"
            pagination={{
              clickable: true,
              type: 'bullets',
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className={`${styles.carouselBg}  h-100 row mb-3`}>
                <img
                  src={
                    'https://www.transparentpng.com/thumb/coffee/bEnole-coffee-heart-free-png.png'
                  }
                  alt=""
                  className={`${styles.carouselImage}`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${styles.carouselBg}  h-100 row mb-3`}>
                <img
                  src={
                    'https://www.transparentpng.com/thumb/coffee/v6EtCB-coffee-transparent-background.png'
                  }
                  alt=""
                  className={`${styles.carouselImage}`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${styles.carouselBg}  h-100 row mb-3`}>
                <img
                  src={
                    'https://www.transparentpng.com/thumb/coffee/TgK6AC-coffee-transparent-image.png'
                  }
                  alt=""
                  className={`${styles.carouselImage}`}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
