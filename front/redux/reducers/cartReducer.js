const currentCart = (state = { cart: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const index = state.cart.findIndex((e) => e._id === action.payload);
      return {
        ...state,
        cart:
          index === -1
            ? [...state.cart, { _id: action.payload, quantity: 1 }]
            : state.cart.map((e) =>
                e._id === action.payload
                  ? { ...e, quantity: e.quantity + 1 }
                  : e
              ),
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((e) => e._id === action.payload),
      };

    default:
      return state;
  }
};

export default currentCart;
