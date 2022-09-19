import { useSelector } from 'react-redux'

export default function Logged() {
  const user = useSelector((state) => state.userReducer.user)
  return <div>logged as:{user}</div>
}
