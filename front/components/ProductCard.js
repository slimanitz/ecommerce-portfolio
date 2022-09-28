import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import allActions from '../redux/actions';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({
  _id,
  productName,
  price,
  description,
  imgUrl,
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddToCart = (productId) => {
    dispatch(allActions.cartActions.addToCart(productId));
  };

  const handleBuyNow = (productId) => {
    dispatch(allActions.cartActions.addToCart(productId));
    router.push('/cart');
  };
  return (
    <div className={`card  col-sm p-3 ${styles.card} h-100`}>
      <img
        className={` ${styles.image}} card-img-top`}
        src={imgUrl}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">{description}</p>
        <div className="row">Price: {price}</div>
        <div className="row">
          <button
            className="btn btn-primary col-sm mr-2"
            onClick={() => handleAddToCart(_id)}
          >
            Ajouter au panier
          </button>
          <button
            className="btn btn-outline-primary col-sm ml-2"
            onClick={() => handleBuyNow(_id)}
          >
            Acheter maintenant
          </button>
        </div>
      </div>
    </div>
  );
}
