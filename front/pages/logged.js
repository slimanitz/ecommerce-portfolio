import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Logged() {
  const userReducer = useSelector((state) => state.userReducer)
  const router = useRouter()

  useEffect(() => {
    if (!userReducer.user) router.push('/')
  }, [])

  return <div>logged as:{userReducer.user.fullName + userReducer.token}</div>
}
