const login = (user) => {
  return {
    type: 'LOGIN',
    payload: userObj,
  }
}

const logOut = () => {
  return {
    type: 'LOG_OUT',
  }
}

export { login, logOut }
