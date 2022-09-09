import Navbar from './Navbar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
