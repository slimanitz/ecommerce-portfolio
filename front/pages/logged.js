import { useSelector } from 'react-redux'

export default function Logged() {
  const user = useSelector((state) => state.userReducer.user)
  const token = useSelector((state) => state.userReducer.token)
  return <div>logged as:{user.fullName + token}</div>
}
