/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import { Carousel, Toast, ToastContainer } from "react-bootstrap";
import { useDispatch } from "react-redux";
import API from "../../axios";
import allActions from "../../redux/actions";
import styles from "../../styles/Product.module.css";

export async function getServerSideProps(context) {
  // Fetch data from external API

  const product = await API.get("/products/" + context.params.id);

  return { props: { product: product.data } };
}

function ProductId({ product }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleAddQuantity = () => {
    dispatch(allActions.cartActions.addToCart({ _id: product._id, quantity }));
    setShow(true);
    setQuantity(0);
  };

  return (
    <div className="container-fluid">
      <div className={`row ${styles.background}`}>
        <div className="col-1"></div>
        <div className="col-11">
          <div className="row mt-3">
            <div className="row">
              <div className="col-lg-5 col-sm-12 ">
                <p className={`${styles.title}`}>{product.name}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-sm-12 ">
                <Carousel pause="hover" variant="dark">
                  {product.pics.map((url, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={`http://localhost:8080/public/${url}`}
                        className="h-100 w-100 rounded img-fluid"
                        alt={product.name}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="col-lg-7 col-sm-12">
                <div className="row">
                  <p className={`${styles.price}`}>
                    {product.price["$numberDecimal"] + "€"}
                  </p>
                </div>
                <div className="row">
                  <p className={`${styles.description}`}>
                    Short-sleeved blouse with feminine draped sleeve detail.
                  </p>
                </div>
                <div className="row">
                  <div className="col-1">
                    <p className="">Qty:</p>
                  </div>
                  <div className="col-2">
                    <input
                      className="input w-100"
                      type={"number"}
                      value={quantity}
                      max={product.availableQuantity}
                      step={1}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-primary"
                      onClick={handleAddQuantity}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12"></div>
        </div>
        <div className="col-1"></div>
      </div>
      {show && (
        <ToastContainer className="p-3" position={"bottom-end"}>
          <Toast
            onClose={() => setShow(false)}
            animation={true}
            delay={2000}
            autohide={true}
            show={show}
          >
            <Toast.Header closeButton={true}>
              <img
                src="/logo.png"
                className="rounded me-2"
                height={20}
                width={20}
                alt=""
              />
              <strong className="me-auto">Information</strong>
            </Toast.Header>
            <Toast.Body>Produit ajouté au panier</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </div>
  );
}

export default ProductId;
