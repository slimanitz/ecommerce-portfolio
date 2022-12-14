/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import allActions from "../redux/actions";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ className, product }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleAddToCart = () => {
    dispatch(allActions.cartActions.addToCart({ ...product, quantity: 1 }));
    setShow(true);
  };

  const handleBuyNow = () => {
    dispatch(allActions.cartActions.addToCart({ ...product, quantity: 1 }));
    router.push("/cart");
  };
  return (
    <div className={`rounded p-3 ${styles.card} h-100 ${className}`}>
      <img
        className={` ${styles.image}} card-img-top rounded`}
        src={`http://localhost:8080/public/${product.pics[0]}`}
        alt={product.name}
        onClick={() => router.push("/products/" + product._id)}
      />
      <div className="p-2">
        <div className="row">
          <p className={`text-truncate ${styles.title}`}>{product.name}</p>
        </div>
        <div className="row">
          <p className={`${styles.price} `}>
            {product.price["$numberDecimal"]} €
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6  col-sm-12 mb-1">
            <button
              className="btn btn-primary "
              onClick={() => handleAddToCart()}
            >
              Ajouter au panier
            </button>
          </div>
          <div className="col-lg-6 col-sm-12 mb-1">
            <button
              className="btn btn-outline-primary  "
              onClick={() => handleBuyNow()}
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
