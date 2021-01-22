import { useEffect } from 'react';
import Preloader from 'components/Preloader';
import { useApiRequest } from 'hooks';
import * as productsAPI from 'api/products';
import Product from './Product';
import styles from './ProductsView.module.sass';

const ProductsView = () => {
  const {
    setError: setProductsError,
    setData: setProducts,
    setLoading: setProductsLoading,
    isLoading: isLoadingProducts,
    data: products,
  } = useApiRequest({ initialData: { data: [] }, initialLoading: true });

  useEffect(() => {
    setProductsLoading(true);
    productsAPI
      .fetchProducts()
      .then((data) => {
        setProductsLoading(false);
        setProducts(data);
      })
      .catch((error) => setProductsError(JSON.stringify(error, null, 1)));
  }, []);

  return (
    <div className={styles.productsView}>
      {isLoadingProducts && <Preloader className={styles.preloader} />}
      {products.data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsView;
