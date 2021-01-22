import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { cartEntitiesCountSelector } from 'store/cart';
import Cart from './Cart/Cart';
import styles from './Header.module.sass';

const mainNavList = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
  {
    href: '/contacts',
    title: 'Contact us',
  },
  {
    href: '/faq',
    title: 'FAQ',
  },
  {
    href: '/delivery',
    title: 'Delivery',
  },
  {
    href: '/order',
    title: 'Order',
  },
];

const Header = () => {
  const cartCount = useSelector(cartEntitiesCountSelector);
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerRow}>
          <div className={styles.brand}>Logo brand</div>
          <nav className={styles.navbar}>
            <ul>
              {mainNavList.map(({ href, title }, i) => (
                <li key={i}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => setCartOpen(true)} className={styles.cartButton}>
                  Cart <div className={styles.cartCount}>{cartCount}</div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {isCartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </header>
  );
};

export default Header;
