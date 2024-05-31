import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/Cart.module.css';

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className={styles.cartItems}>
            {cart.map(product => (
              <div key={product.id} className={styles.cartItem}>
                <img src={product.image} alt={product.name} className={styles.image} />
                <div>
                  <h2>{product.name}</h2>
                  <p>${product.price}</p>
                  <button onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <Link href="/checkout" legacyBehavior>
          <a className={styles.checkoutButton}>Go to Checkout</a>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
