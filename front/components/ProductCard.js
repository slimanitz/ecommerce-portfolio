/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import allActions from "../redux/actions";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ className, _id, name, price, imgUrl }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleAddToCart = (productId) => {
    dispatch(allActions.cartActions.addToCart(productId));
    setShow(true);
  };

  const handleBuyNow = (productId) => {
    dispatch(allActions.cartActions.addToCart(productId));
    router.push("/cart");
  };
  return (
    <div className={`card   p-3 ${styles.card} h-100 ${className}`}>
      <img
        className={` ${styles.image}} card-img-top rounded`}
        src={imgUrl}
        alt={name}
        onClick={() => router.push("/products/" + _id)}
      />
      <div className="p-2">
        <div className="row">
          <p className={`text-truncate ${styles.title}`}>{name}</p>
        </div>
        <div className="row">
          <p className={`${styles.price} `}>{price} €</p>
        </div>
        <div className="row">
          <div className="col-lg-6  col-sm-12 mb-1">
            <button
              className="btn btn-primary "
              onClick={() => handleAddToCart(_id)}
            >
              Ajouter au panier
            </button>
          </div>
          <div className="col-lg-6 col-sm-12 mb-1">
            <button
              className="btn btn-outline-primary  "
              onClick={() => handleBuyNow(_id)}
            >
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>

      <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
        <Toast.Header>
          <strong className="me-auto">Informations</strong>
        </Toast.Header>
        <Toast.Body>Le produit a bien ete ajouter au panier</Toast.Body>
      </Toast>
    </div>
  );
}
