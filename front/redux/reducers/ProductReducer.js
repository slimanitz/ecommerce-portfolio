const currentProducts = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    default:
      return state;
  }
};

export default currentProducts;
