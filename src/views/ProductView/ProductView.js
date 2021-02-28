import { useRouter } from 'next/router';
import { useEffect } from 'react';

import * as productAPI from 'api/products';
import { useApiRequest } from 'hooks';
import { Preloader } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, cartEntitiesSelector, deleteProductOfCart } from 'store/cart';
import Comments from './Comments';
import ImagesPreview from './ImagesPreview';
import styles from './ProductView.module.sass';

const ProductView = () => {
  const router = useRouter();

  const {
    data: product,
    setData: setProduct,
    isLoading: isLoadingProduct,
    setLoading: setLoadingProduct,
    setError: setLoadingProductError,
  } = useApiRequest({
    initialData: null,
  });

  const dispatch = useDispatch();
  const cartEntities = useSelector(cartEntitiesSelector);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCart(product));
  };

  const handleDeleteOfCart = () => dispatch(deleteProductOfCart(product.id));

  useEffect(() => {
    setLoadingProduct(true);
    productAPI
      .fetchProduct(router.query.productId)
      .then((data) => {
        setLoadingProduct(false);
        setProduct(data);
      })
      .catch((error) => {
        setLoadingProductError(JSON.stringify(error, null, 1));
      });
  }, []);

  if (product === null) return null;

  const isExistInCart = cartEntities[product.id] !== undefined;

  return (
    <div>
      {isLoadingProduct && Preloader}
      <div className={styles.contentWrapper}>
        <ImagesPreview images={product.images} />
        <div className={styles.info}>
          <h1>{product?.title}</h1>
          <div className={styles.content}>{product?.content}</div>
          <div className={styles.price}>
            Price: <b>{product.price}$</b>
          </div>
          {isExistInCart ? (
            <button type="button" className="button decline" onClick={handleDeleteOfCart}>
              Delete of cart
            </button>
          ) : (
            <button type="button" className="button" onClick={handleAddToCart}>
              Add to cart
            </button>
          )}
        </div>
      </div>
      <Comments
        comments={[
          {
            id: 1,
            author: 'Viktor Panasiuk',
            content: 'Hello, My name is Viktor Panasiuk!',
          },
          {
            id: 2,
            author: 'Oleh Stepko',
            content: 'Hello, What are you doing?',
          },
          {
            id: 3,
            author: 'Viktor Panasiuk',
            content: 'I am drink a beer, and you?',
          },
        ]}
      />
    </div>
  );
};

export default ProductView;
