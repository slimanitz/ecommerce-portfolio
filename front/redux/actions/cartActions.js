const addToCart = (product, quantity = 1) => {
  return {
    type: 'ADD_TO_CART',
    payload: { product, quantity },
  };
};

export default { addToCart };
