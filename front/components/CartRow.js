import Image from "next/image";
import styles from "../styles/CartRow.module.css";

export default function CartRow({ product }) {
  console.log(product);
  return (
    <div className={`row p-4 ${styles.background}`}>
      <div className={`col-2 `}>
        <Image
          className="rounded"
          layout="responsive"
          height={50}
          width={50}
          alt={product.name}
          src={"http://localhost:8080/public/" + product.pics[0]}
        />
      </div>
      <div className="col-8">
        <div className="row">
          <div className="col-6">
            <p className={`${styles.name}}} `}>{product.name}</p>
          </div>
          <div className="col-3">
            <p className=""> QTY:</p>
          </div>
          <div className="col-3">
            <p>Total:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p className={`${styles.price}}}`}>
              {product.price["$numberDecimal"]}
            </p>
          </div>
          <div className="col-3">
            <p className={`${styles.price}}}`}>{product.quantity}</p>
          </div>
          <div className="col-3">
            <p className={`${styles.price}}}`}>
              {product.price["$numberDecimal"] * product.quantity}
            </p>
          </div>
        </div>
        {/* <div className="row">
          <p className={`${styles.name}}}`}>{product.name}</p> //HERE WHERE YOU SHOULD ADD YOUR NEW FIELDS SIZE COLOR ETC ...
        </div> */}
      </div>
      <div className="col-2"></div>
    </div>
  );
}
