import { useDispatch } from 'react-redux';
import P from 'prop-types';
import { Price } from 'components/index';
import { useState, useEffect } from 'react';
import { deleteProductOfCart, updateProductCount } from 'store/cart';
import styles from 'views/Header/Cart/Cart.module.sass';

const CartProduct = ({ product }) => {
  const [count, setCount] = useState(product.count);
  const dispatch = useDispatch();
  const handleDeleteProduct = (product) => dispatch(deleteProductOfCart(product.id));

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(updateProductCount({ productId: product.id, count }));
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  const handleChangeCount = ({ target: { value } }) => {
    const newCount = Number(value);

    if (newCount >= 0) {
      setCount(newCount);
    }
  };

  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <h4 className={styles.productTitle}>{product.title}</h4>
      <Price value={product.price} />
      <input type="number" value={count} onChange={handleChangeCount} className={styles.productCount} />
      <button type="button" className={styles.productDeleteButton} onClick={() => handleDeleteProduct(product)}>
        Delete
      </button>
    </div>
  );
};

CartProduct.propTypes = {
  product: P.shape({
    id: P.number.isRequired,
    title: P.string.isRequired,
    price: P.number.isRequired,
    count: P.number.isRequired,
    image: P.string.isRequired,
  }),
};

export default CartProduct;
