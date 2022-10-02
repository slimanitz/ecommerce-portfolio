/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
import allActions from "../redux/actions";
import { isMobile } from "react-device-detect";

export default function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const userReducer = useSelector((state) => state.userReducer);
  const router = useRouter();
  const dispatch = useDispatch();

  const disconnect = () => {
    router.push("/");
    dispatch(allActions.userActions.logOut());
  };

  return (
    <div className="container-fluid">
      <div className=" mt-3">
        <div className="row">
          <div className="col-sm justify-content-center">
            <div className="input-group  my-5  w-50  mx-auto">
              {userReducer.loggedIn ? (
                <div className="row">
                  <div className=" col- mx-auto">
                    <p>Hello {userReducer.user.fullName}</p>
                  </div>
                  <div className="col- mx-auto">
                    <button className="btn btn-danger" onClick={disconnect}>
                      Disconnect
                    </button>
                  </div>
                </div>
              ) : (
                !isMobile && (
                  <div className="row">
                    <button
                      className="btn btn-primary mx-auto"
                      onClick={() =>
                        router.push({
                          pathname: "/login",
                          query: { redirect: "/" },
                        })
                      }
                    >
                      Se connecter
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="col-sm justify-content-center " align={"center"}>
            <img src={"/logo.png"} width={200} height={200} alt="" />
          </div>

          <div className="cart col-sm   text-center">
            <button
              type="button"
              onClick={() => router.push("/cart")}
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
                  as={"a"}
                  className={`nav-link ${styles.customLink}`}
                  href="/"
                >
                  Home
                </Nav.Link>
              </Link>
            </li>
            <li className="nav-item mx-lg-4">
              <Link href="/products">
                <Nav.Link
                  as={"a"}
                  className={`nav-link ${styles.customLink}`}
                  href="/products"
                >
                  Product
                </Nav.Link>
              </Link>
            </li>
            <li className="nav-item mx-lg-4">
              <Link className={`nav-link ${styles.customLink}`} href="/about">
                <Nav.Link
                  as={"a"}
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
                  as={"a"}
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
