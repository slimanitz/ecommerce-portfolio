import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-sm justify-content-center">
          <div className="input-group  my-5  w-50  mx-auto">
            <input
              type="text"
              class={`form-control ${styles.seachInput}`}
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
            <i class="bi bi-cart"></i>
          </button>
        </div>
      </div>
      <div className={`row mt-3 py-4 ${styles.navRow}`}>
        <ul class="nav justify-content-center">
          <li class="nav-item mr-4">
            <a class={`nav-link ${styles.customLink}`} href="#">
              Home
            </a>
          </li>
          <li class="nav-item mx-4">
            <a class={`nav-link ${styles.customLink}`} href="#">
              Product
            </a>
          </li>
          <li class="nav-item mx-4">
            <a class={`nav-link ${styles.customLink}`} href="#">
              About
            </a>
          </li>
          <li class="nav-item ml-4">
            <a class={`nav-link ${styles.customLink}`} href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
