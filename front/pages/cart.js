import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import API from "../axios";
import { wrapper, store } from "../redux/store";

export default function Cart() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const [cartProducts, setCartProducts] = useState({});

  useEffect(() => {
    API.get("/products/bulk", {
      params: { productIds: JSON.stringify(cart) },
    }).then((response) => setCartProducts(response.data));
  }, []);

  return (
    <div>
      <p>Cart: {JSON.stringify(cart)}</p>
      <p>products: {JSON.stringify(cartProducts)}</p>
    </div>
  );
}
