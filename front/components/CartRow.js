import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import cartActions from "../redux/actions/cartActions";
import styles from "../styles/CartRow.module.css";

export default function CartRow({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className={`row p-4 ${styles.background} rounded`}>
      <div className={`col-2 `}>
        <Image
          onClick={() => router.push(`/products/${product._id}`)}
          className="rounded"
          role={"button"}
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
            <p className={`${styles.name} `}>{product.name}</p>
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
              {product.price["$numberDecimal"]}€
            </p>
          </div>
          <div className="col-3">
            <p className={`${styles.price}}}`}>
              {product.quantity}
              <button
                className="btn btn-primary rounded-circle"
                onClick={() =>
                  dispatch(
                    cartActions.editQuantity({ _id: product._id, quantity: 1 })
                  )
                }
              >
                +
              </button>
              <button
                className="btn btn-danger rounded-circle"
                onClick={() =>
                  product.quantity === 1
                    ? dispatch(cartActions.removeFromCart(product))
                    : dispatch(
                        cartActions.editQuantity({
                          _id: product._id,
                          quantity: -1,
                        })
                      )
                }
              >
                -
              </button>
            </p>
          </div>
          <div className="col-3">
            <p className={`${styles.price}}}`}>
              {(product.price["$numberDecimal"] * product.quantity).toFixed(2)}€
            </p>
          </div>
        </div>
        {/* <div className="row">
          <p className={`${styles.name}}}`}>{product.name}</p> //HERE WHERE YOU SHOULD ADD YOUR NEW FIELDS SIZE COLOR ETC ...
        </div> */}
      </div>
      <div className="col-2 ml-auto text-right my-auto">
        <Image
          src={"/trash.svg"}
          alt="trash"
          role={"button"}
          onClick={() => dispatch(cartActions.removeFromCart(product))}
          layout="fixed"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
