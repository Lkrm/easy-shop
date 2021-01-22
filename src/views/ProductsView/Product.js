import P from 'prop-types';
import Link from 'next/link';
import { Price } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { cartEntitiesSelector, addProductToCart, deleteProductOfCart } from 'store/cart';

import styles from './Product.module.sass';

const Product = ({ product }) => {
  const { title, price, image } = product;
  const dispatch = useDispatch();
  const cartEntities = useSelector(cartEntitiesSelector);
  const isExistInCart = cartEntities[product.id] !== undefined;

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCart(product));
  };

  const handleDeleteOfCart = () => dispatch(deleteProductOfCart(product.id));

  return (
    <Link href={`/products/${product.id}`}>
      <a className={styles.product}>
        <img src={image} alt={title} className={styles.image} />
        <b className={styles.title}>{title}</b>
        <div className={styles.price}>
          Price: <Price value={price} />{' '}
        </div>
        <hr />
        {isExistInCart ? (
          <button type="button" className="button full decline" onClick={handleDeleteOfCart}>
            Delete of cart
          </button>
        ) : (
          <button type="button" className="button full" onClick={handleAddToCart}>
            Add to cart
          </button>
        )}
      </a>
    </Link>
  );
};

Product.propTypes = {
  product: P.shape({
    id: P.number.isRequired,
    title: P.string.isRequired,
    price: P.number.isRequired,
    image: P.string.isRequired,
  }).isRequired,
};

export default Product;
