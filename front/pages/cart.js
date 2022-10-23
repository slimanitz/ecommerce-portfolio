import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../axios";
import CartRow from "../components/CartRow";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const router = useRouter();
  const cart = useSelector((state) => state.cartReducer.cart);

  const totalProducts = cart
    .reduce((a, b) => a + b.price["$numberDecimal"] * b.quantity, 0)
    .toFixed(2);

  const totalShipping = 0;

  return (
    <div className="container-fluid">
      <div className="row"></div>

      <div className="row px-4">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row mt-3">
            <p className={`${styles.title}`}>
              {
                <Image
                  layout="fixed"
                  src={"/basket.svg"}
                  width={40}
                  height={40}
                  alt="cart"
                />
              }
              Shopping Cart
            </p>
          </div>
          <div className="row">
            <div className="col-8">
              {cart.map((product) => (
                <CartRow product={product} key={product._id} />
              ))}
            </div>
            <div className="col-1"></div>
            <div className={`col-3 ${styles.totalbg}`}>
              <p className={`${styles.totalFields}`}>
                Il y a {cart.length} produits dans le panier
              </p>
              <p className={`${styles.totalFields}`}>
                Total produits: {totalProducts}€
              </p>
              <p className={`${styles.totalFields}`}>
                Total livraison: {totalShipping}€
              </p>
              <p className={`${styles.totalFields}`}>
                Total: {+totalProducts + +totalShipping}€
              </p>
              <button
                className={`btn btn-primary rounded-pill`}
                onClick={() => router.push("/checkout")}
              >
                Go to checkout
              </button>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
