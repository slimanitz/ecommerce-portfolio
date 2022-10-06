const addToCart = ({ _id, quantity = 1 }) => {
  return {
    type: "ADD_TO_CART",
    payload: { _id, quantity },
  };
};

export default { addToCart };
