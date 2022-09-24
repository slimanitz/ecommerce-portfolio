/* eslint-disable @next/next/no-img-element */
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import styles from '../styles/Index.module.css';
import allActions from '../redux/actions';
import { useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const dispatch = useDispatch();

  const product = { name: 'Depresso', quantity: 1 };

  const handleAddToCart = () => {
    dispatch(allActions.cartActions.addToCart(product));
  };

  return (
    <div className="container-fluid ">
      <div className="row">
        <Swiper
          key={1}
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
      <div className="row text-center justify-content-center">
        <p className="subTitle w-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
          fermentum urna. Nulla facilisi. Integer rutrum augue et purus vehicula
          maximus. Praesent eget quam ullamcorper, finibus sapien non, semper
          mauris. Donec sed odio scelerisque arcu commodo pretium eget at velit.
          Nulla mattis porta auctor. Curabitur et felis eget diam venenatis
          dapibus. Pellentesque ligula purus, interdum ac nunc lobortis,
          tincidunt porttitor mi.
        </p>
      </div>
      <div className="row mx- mt-5 ">
        <div className="col-2"></div>
        <div className="col-8 ">
          <div className="row">
            <div className="col-lg-4 col-sm-10 ">
              <div className="row">
                <img src="/leaf.svg" width="50px" height="50px" />
              </div>
              <div className="row text-center">
                <p className={`${styles.cacTitle}`}>Always Fresh</p>
              </div>
              <div className="row text-center">
                <p className={`${styles.cacsubTitle}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a fermentum urna. Nulla facilisi. Integer rutrum augue et
                  purus vehicula maximus. Praesent eget quam ullamcorper,
                  finibus sapien
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-10">
              <div className="row">
                <img src="/health.svg" width="50px" height="50px" />
              </div>
              <div className="row text-center">
                <p className={`${styles.cacTitle}`}>Healthy</p>
              </div>
              <div className="row text-center">
                <p className={`${styles.cacsubTitle}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a fermentum urna. Nulla facilisi. Integer rutrum augue et
                  purus vehicula maximus. Praesent eget quam ullamcorper,
                  finibus sapien
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-10">
              <div className="row">
                <img src="/premium.svg" width="50px" height="50px" />
              </div>
              <div className="row text-center">
                <p className={`${styles.cacTitle}`}>Premium quality</p>
              </div>
              <div className="row text-center">
                <p className={`${styles.cacsubTitle}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a fermentum urna. Nulla facilisi. Integer rutrum augue et
                  purus vehicula maximus. Praesent eget quam ullamcorper,
                  finibus sapien
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <p className={`${styles.deal} text-center`}>Deals of the day</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to cart
        </button>
        <Swiper
          key={2}
          // install Swiper modules
          modules={[Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
          spaceBetween={1}
          slidesPerView={3}
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
            <div className="row">
              <ProductCard
                productId={1234}
                productName={'coffee machine nespresso'}
                price={0}
                description={'This is a basic product '}
              />
              <ProductCard
                productId={1234}
                productName={'coffee machine nespresso'}
                price={0}
                description={'This is a basic product '}
              />
              <ProductCard
                productId={1234}
                productName={'coffee machine nespresso'}
                price={0}
                description={'This is a basic product '}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <ProductCard
                productId={1234}
                productName={'coffee machine nespresso'}
                price={0}
                description={'This is a basic product '}
              />
              <ProductCard
                productId={1234}
                productName={'coffee machine nespresso'}
                price={0}
                description={'This is a basic product '}
              />
              <ProductCard
                productId={1234}
                productName={'coffee machine nespresso'}
                price={0}
                description={'This is a basic product '}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
