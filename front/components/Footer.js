/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className={`${styles.footer} row mt-5`}>
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row mt-5">
            <div className="col-lg-4 col-sm-10 mt-sm-5">
              <div className="row">
                <img
                  src="/house.svg"
                  className=" col-2 "
                  width={20}
                  height={20}
                  alt=""
                />
                <p className="col-10">
                  30 rue de la Pie, Vitry sur seine,94400
                </p>
              </div>
              <div className="row">
                <img
                  src="/phone.svg"
                  className=" col-2 "
                  width={20}
                  height={20}
                  alt=""
                />
                <p className="col-10">+33 7 58 58 45 06</p>
              </div>
              <div className="row">
                <img
                  src="/email.svg"
                  className=" col-2"
                  width={20}
                  height={20}
                  alt=""
                />
                <a className="col-10" href="mailto:contact@icoffee.com">
                  contact@icoffee.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-10 mt-sm-5 mt-xl-0">
              <p className={`${styles.title}`}>PHOTO INSTAGRAM</p>
            </div>
            <div className="col-lg-4 col-sm-10 mt-sm-5 mt-xl-0">
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
            <div className="col-lg-4 col-sm-10">
              <div className="row mt-3">
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
            <div className="col-lg-4 col-sm-10 ">
              <div className="row mt-3">
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
            <div className="col-lg-4 col-sm-10 ">
              <div className="row mt-3">
                <img
                  src="/money.svg"
                  className={`col-4`}
                  width={80}
                  height={80}
                  alt=""
                />
                <div className="col-8 ">
                  <p className={`${styles.title} mb-0`}>
                    MONEY BACK GUARANTEED
                  </p>
                  <p className={`${styles.subTitle}`}>Money back policy </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1"></div>
      </div>
      <div className="row bg-light mb-0">
        <div className="col-1 "></div>
        <div className="col-lg-6 col-sm-10 py-4">
          <p className={`${styles.designer} py-2`}>
            Designed By Slimanitz !! All rights Reserved
          </p>
        </div>
        <div className="col-lg-1 "></div>

        <div className="col-lg-4 col-sm-10">
          <div className="row py-4">
            <p className={`${styles.payment} col-3 py-2 mr-2`}>
              Payment accept
            </p>
            <img
              className="col-2"
              width={50}
              height={50}
              src="/mastercard.svg"
              alt=""
            />
            <img
              className="col-2  "
              width={50}
              height={50}
              src="/visa.svg"
              alt=""
            />
            <img
              className="col-2  "
              width={50}
              height={50}
              src="/paypal.svg"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  )
}
