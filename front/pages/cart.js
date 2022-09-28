import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((state) =>
    state.productReducer.products.filter((e) =>
      state.cartReducer.cart.some((p) => e._id === p._id)
    )
  );
  console.log(cart);
  return <div>{JSON.stringify(cart)}</div>;
}
