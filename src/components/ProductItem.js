import Link from 'next/link';
import { useCart } from '../context/CartContext';
import styles from './ProductItem.module.css';

const ProductItem = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`} legacyBehavior>
        <a>
          <img src={product.image} alt={product.name} className={styles.image} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </a>
      </Link>
      <button onClick={addToCart} className={styles.button}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
