const currentCart = (state = { cart: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, state.paylaod],
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((e) => e === action.paylaod),
      }

    default:
      return state
  }
}

export default currentCart
