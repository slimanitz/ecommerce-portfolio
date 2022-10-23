const currentCart = (state = { cart: [] }, action) => {
  const product = action.payload;
  const index = state.cart.findIndex((e) => e._id === product._id);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart:
          index === -1
            ? [...state.cart, product]
            : state.cart.map((e) =>
                e._id === product._id
                  ? { ...e, quantity: e.quantity + product.quantity }
                  : e
              ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((e) => e._id !== action.payload),
      };

    case "EDIT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((e) =>
          e._id === product._id
            ? { ...e, quantity: e.quantity + product.quantity }
            : e
        ),
      };

    default:
      return state;
  }
};

export default currentCart;
