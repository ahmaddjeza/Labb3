import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.nav}>
    <div>
      <Link href="/" legacyBehavior>
        <a>My Webshop</a>
      </Link>
    </div>
    <nav>
      <ul>
        <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
        <li><Link href="/cart" legacyBehavior><a>Cart</a></Link></li>
        <li><Link href="/login" legacyBehavior><a>Login</a></Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
