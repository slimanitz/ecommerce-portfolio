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
            autoplay
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
        <div className="row text-center mt-5">
          <p className={styles.title}>Welcome to ICOFFEE</p>
        </div>
        <div className="row">
          <p className="subTitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            fermentum urna. Nulla facilisi. Integer rutrum augue et purus
            vehicula maximus. Praesent eget quam ullamcorper, finibus sapien
            non, semper mauris. Donec sed odio scelerisque arcu commodo pretium
            eget at velit. Nulla mattis porta auctor. Curabitur et felis eget
            diam venenatis dapibus. Pellentesque ligula purus, interdum ac nunc
            lobortis, tincidunt porttitor mi.
          </p>
        </div>
      </div>
    </>
  )
}
