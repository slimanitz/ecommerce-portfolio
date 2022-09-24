import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  console.log(cart);
  return <div>{cart.toString()}</div>;
}
