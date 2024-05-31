import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Checkout.module.css';

const CheckoutPage = () => {
  const { cart, dispatch } = useCart();

  const handleCheckout = () => {
    // Logik för att hantera kassan
    alert('Checkout successful!');
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Checkout</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className={styles.checkoutItems}>
            {cart.map(product => (
              <div key={product.id} className={styles.checkoutItem}>
                <img src={product.image} alt={product.name} className={styles.image} />
                <div>
                  <h2>{product.name}</h2>
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <button onClick={handleCheckout} className={styles.checkoutButton}>Confirm Checkout</button>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
