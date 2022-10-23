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

const editQuantity = (product) => {
  return {
    type: "EDIT_QUANTITY",
    payload: product,
  };
};

export default { addToCart, removeFromCart, editQuantity };
