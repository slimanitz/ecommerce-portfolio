const currentCart = (state = { cart: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log(state)
      return {
        ...state,
        cart: [...state.cart, state.paylaod],
      }

    default:
      return state
  }
}

export default currentCart
