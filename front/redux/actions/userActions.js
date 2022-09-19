const login = ({ user, token }) => {
  return {
    type: 'LOGIN',
    payload: { user, token },
  }
}

const logOut = () => {
  return {
    type: 'LOG_OUT',
  }
}

export default { login, logOut }
