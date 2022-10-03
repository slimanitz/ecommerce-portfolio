/* eslint-disable @next/next/no-img-element */

import styles from "../styles/Index.module.css";
import allActions from "../redux/actions";
import { useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import API from "../axios";
import { Carousel, Stack } from "react-bootstrap";
import { isMobile } from "react-device-detect";

import MultiCarousel from "react-multi-carousel";

export async function getServerSideProps() {
  // Fetch data from external API

  const res = await API.get("/products", { params: { limit: 3 } });

  return { props: { products: res.data } };
}

export default function Home({ products }) {
  const dispatch = useDispatch();
  dispatch(allActions.productActions.getProducts(products));

  const renderProducts = () => {
    const chunkSize = isMobile ? 1 : 3;
    const listOfChunks = [];
    for (let i = 0; i < products.length; i += chunkSize) {
      listOfChunks.push(products.slice(i, i + chunkSize));
    }

    return listOfChunks.map((chunk, index) => (
      <Carousel.Item key={index}>
        <Stack
          direction="horizontal"
          className="h-100 justify-content-center align-items-center"
          gap={3}
        >
          {chunk.map((product, index) => (
            <ProductCard
              className="col-sm"
              key={index}
              _id={product._id}
              price={product.price["$numberDecimal"]}
              name={product.name}
              imgUrl={"http://localhost:8080/public/" + product.pics[0]}
            ></ProductCard>
          ))}
        </Stack>
      </Carousel.Item>
    ));
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
                  "https://www.transparentpng.com/thumb/coffee/TgK6AC-coffee-transparent-image.png"
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
                  "https://www.transparentpng.com/thumb/coffee/bEnole-coffee-heart-free-png.png"
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
                  "https://www.transparentpng.com/thumb/coffee/v6EtCB-coffee-transparent-background.png"
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

        <Carousel>{renderProducts()}</Carousel>
      </div>
    </div>
  );
}
