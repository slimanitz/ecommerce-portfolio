import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className="container-fluid">
      <div className=" mt-3">
        <div className="row">
          <div className="col-sm justify-content-center">
            <div className="input-group  my-5  w-50  mx-auto">
              <input
                type="text"
                className={`form-control ${styles.seachInput}`}
                placeholder="Search"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="bi bi-search "></i>
              </button>
            </div>
          </div>
          <div className="col-sm justify-content-center " align={'center'}>
            <Image src={'/logo.png'} layout="fixed" width={200} height={200} />
          </div>
          <div className="col-sm   text-center ">
            <button className={`btn  my-5 btn-xl ${styles.cart}`}>
              <i className="bi bi-cart"></i>
            </button>
          </div>
        </div>
        <div className={`row mt-3 py-4 px-0 ${styles.navRow}`}>
          <ul className="nav justify-content-center">
            <li className="nav-item mr-lg-4">
              <a className={`nav-link ${styles.customLink}`} href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-lg-4">
              <a className={`nav-link ${styles.customLink}`} href="#">
                Product
              </a>
            </li>
            <li className="nav-item mx-lg-4">
              <a className={`nav-link ${styles.customLink}`} href="#">
                About
              </a>
            </li>
            <li className="nav-item ml-lg-4">
              <a className={`nav-link ${styles.customLink}`} href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
