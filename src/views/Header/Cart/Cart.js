import P from 'prop-types';
import { useSelector } from 'react-redux';
import { cartEntitiesSelector, cartTotalPriceSelector } from 'store/cart';
import Price from 'components/Price';
import CartProduct from './CartProduct';
import styles from './Cart.module.sass';

const Cart = ({ onClose }) => {
  const entities = useSelector(cartEntitiesSelector);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const listOfProducts = Object.values(entities);

  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cart}>
        <div className={styles.cartHeader}>
          <div className={styles.cartTitle}>Cart</div>
          <button type="button" onClick={onClose} className={styles.closeButton}>
            Close
          </button>
        </div>
        <ul>
          {listOfProducts.map((product) => (
            <li key={product.id}>
              <CartProduct product={product} />
            </li>
          ))}
        </ul>
        {listOfProducts.length === 0 ? (
          <div className={styles.emptyCart}>Products not found</div>
        ) : (
          <div className={styles.cartFooter}>
            <div className={styles.cartTotal}>
              Total: <Price value={totalPrice} />
            </div>
            <button type="button" className="button action">
              Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  onClose: P.func.isRequired,
};

export default Cart;
