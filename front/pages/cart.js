import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../axios";
import CartRow from "../components/CartRow";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <div className="container-fluid">
      <div className="row"></div>
      <div className="row">
        <p className={`${styles.title}`}>Shopping Cart</p>
      </div>
      <div className="row px-4">
        {cart.map((product) => (
          <CartRow product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}
