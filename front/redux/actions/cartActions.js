const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

const removeFromCart = ({ _id }) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: _id,
  };
};

export default { addToCart, removeFromCart };
