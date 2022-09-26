/* eslint-disable @next/next/no-img-element */

import styles from '../styles/Index.module.css';
import allActions from '../redux/actions';
import { useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import API from '../axios';
import { Carousel } from 'react-bootstrap';

import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await API.get('/products');
  const products = await res.data;

  return { props: { products } };
}

export default function Home({ products }) {
  const dispatch = useDispatch();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const handleAddToCart = () => {
    dispatch(allActions.cartActions.addToCart(product));
  };

  const renderProducts = () => {
    return products.map((product, index) => {
      return (
        <ProductCard
          key={index}
          _id={product._id}
          price={product.price['$numberDecimal']}
          name={product.name}
          imgUrl={'http://localhost:8080/public/' + product.pics[0]}
        ></ProductCard>
      );
    });
  };

  return (
    <div className="container-fluid ">
      <div className="row">
        <Carousel>
          <Carousel.Item>
            <div
              className={`${styles.carouselBg} d-block w-100 h-100 row mb-3 text-center`}
            >
              <img
                src={
                  'https://www.transparentpng.com/thumb/coffee/TgK6AC-coffee-transparent-image.png'
                }
                alt=""
                className={`${styles.carouselImage}`}
              />
            </div>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className={`${styles.carouselBg} d-block w-100 h-100 row mb-3 text-center`}
            >
              <img
                src={
                  'https://www.transparentpng.com/thumb/coffee/bEnole-coffee-heart-free-png.png'
                }
                alt=""
                className={`${styles.carouselImage}`}
              />
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className={`${styles.carouselBg}  d-block w-100 h-100 row mb-3 text-center`}
            >
              <img
                src={
                  'https://www.transparentpng.com/thumb/coffee/v6EtCB-coffee-transparent-background.png'
                }
                alt=""
                className={`${styles.carouselImage}`}
              />
            </div>

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
        <MultiCarousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {renderProducts()}
        </MultiCarousel>
        ;
      </div>
    </div>
  );
}
