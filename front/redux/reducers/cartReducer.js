const currentCart = (state = { cart: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((e) => e === action.payload),
      };

    default:
      return state;
  }
};

export default currentCart;
