/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
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
              <p className="col-11">30 rue de la Pie, Vitry sur seine,94400</p>
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
        <div className="row my-4">
          <div className="col-4">
            <img
              src="/shipping.svg"
              className=" col-4 mr-2"
              width={100}
              height={100}
              alt=""
            />
            <div className="col-8 ">
              <p className={`${styles.title}`}>FREE SHIPPING ITEM</p>
              <p className={`${styles.subTitle}`}>Shipping detail </p>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>

      <div className="col-1"></div>
    </div>
  )
}
