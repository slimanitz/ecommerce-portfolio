const currentUser = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loggedIn: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {},
        token: {},
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default currentUser;
