/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className={`${styles.footer} row mt-5`}>
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row mt-5">
            <div className="col-4">
              <div className="row">
                <img
                  src="/house.svg"
                  className=" col-1 mr-2"
                  width={20}
                  height={20}
                  alt=""
                />
                <p className="col-11">
                  30 rue de la Pie, Vitry sur seine,94400
                </p>
              </div>
              <div className="row">
                <img
                  src="/phone.svg"
                  className=" col-1 mr-2"
                  width={20}
                  height={20}
                  alt=""
                />
                <p className="col-11">+33 7 58 58 45 06</p>
              </div>
              <div className="row">
                <img
                  src="/email.svg"
                  className=" col-1 mr-2"
                  width={20}
                  height={20}
                  alt=""
                />
                <a className="col-11" href="mailto:contact@icoffee.com">
                  contact@icoffee.com
                </a>
              </div>
            </div>
            <div className="col-4">
              <p className={`${styles.title}`}>PHOTO INSTAGRAM</p>
            </div>
            <div className="col-4">
              <p className={`${styles.title}`}>NEWSLETTER</p>
              <p className={`${styles.subTitle}`}>
                Sign up for newsletter to receive special offers and exclusive
                news about FreshMart products
              </p>
              <div className="input-group  ">
                <input
                  type="email"
                  className={`form-control`}
                  placeholder="Email"
                />
                <button className={`btn ${styles.submit}`} type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-4">
              <div className="row">
                <img
                  src="/shipping.svg"
                  className=" col-4"
                  width={80}
                  height={80}
                  alt=""
                />
                <div className="col-8 ">
                  <p className={`${styles.title} mb-0`}>FREE SHIPPING ITEM</p>
                  <p className={`${styles.subTitle}`}>Shipping detail </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <img
                  src="/lock.svg"
                  className="col-4"
                  width={80}
                  height={80}
                  alt=""
                />
                <div className="col-8 ">
                  <p className={`${styles.title} mb-0`}>SECURE PAYMENT</p>
                  <p className={`${styles.subTitle}`}>Payment policy </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <img
                  src="/shipping.svg"
                  className={`col-4`}
                  width={80}
                  height={80}
                  alt=""
                />
                <div className="col-8 ">
                  <p className={`${styles.title} mb-0`}>FREE SHIPPING ITEM</p>
                  <p className={`${styles.subTitle}`}>Shipping detail </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1"></div>
      </div>
      <div className="row bg-light mb-0">
        <div className="col-1"></div>
        <div className="col-6">
          <p className={`${styles.designer} py-4`}>
            Designed By Slimanitz !! All rights Reserved
          </p>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6"></div>
            <p className={`${styles.payment} col-3 pt-3 mr-0`}>
              Payment accept
            </p>
            <img className="col-1 " src="/mastercard.svg" />
            <img className="col-1 " src="/visa.svg" />
            <img className="col-1 " src="/paypal.svg" />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}
