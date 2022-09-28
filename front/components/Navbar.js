/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';
import Nav from 'react-bootstrap/Nav';
import { useRouter } from 'next/router';

export default function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const userReducer = useSelector((state) => state.userReducer);
  const router = useRouter();

  return (
    <div className="container-fluid">
      {userReducer.user && (
        <div className="row">
          <div className=" col-3 mr-auto">
            <p>Logged in as: {userReducer.user?.fullName}</p>
          </div>
        </div>
      )}

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
            <img src={'/logo.png'} width={200} height={200} alt="" />
          </div>

          <div className="cart col-sm   text-center">
            <button
              type="button"
              onClick={() => router.push('/cart')}
              className={`btn  my-5 ${styles.cart} p-3`}
            >
              <img src="/cart.svg" height={30} width={30} alt=""></img>
              <span className="badge badge-light">{cart.length}</span>
            </button>
          </div>
        </div>
        <div className={`row mt-3 py-4 px-0 ${styles.navRow}`}>
          <ul className="nav justify-content-center">
            <li className="nav-item mr-lg-4">
              <Link className={`nav-link ${styles.customLink}`} href="/">
                <Nav.Link
                  as={'a'}
                  className={`nav-link ${styles.customLink}`}
                  href="/"
                >
                  Home
                </Nav.Link>
              </Link>
            </li>
            <li className="nav-item mx-lg-4">
              <Link href="/product">
                <Nav.Link
                  as={'a'}
                  className={`nav-link ${styles.customLink}`}
                  href="/product"
                >
                  Product
                </Nav.Link>
              </Link>
            </li>
            <li className="nav-item mx-lg-4">
              <Link className={`nav-link ${styles.customLink}`} href="/about">
                <Nav.Link
                  as={'a'}
                  className={`nav-link ${styles.customLink}`}
                  href="/about"
                >
                  About
                </Nav.Link>
              </Link>
            </li>
            <li className="nav-item ml-lg-4">
              <Link className={`nav-link ${styles.customLink}`} href="/contact">
                <Nav.Link
                  as={'a'}
                  className={`nav-link ${styles.customLink}`}
                  href="/contact"
                >
                  Contact
                </Nav.Link>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
