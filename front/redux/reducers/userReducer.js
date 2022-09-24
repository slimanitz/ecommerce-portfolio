const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        loggedIn: true,
        token: action.payload.token,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {},
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default currentUser;
