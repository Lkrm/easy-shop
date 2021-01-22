import { useRouter } from 'next/router';
import { useEffect } from 'react';

import * as productAPI from 'api/products';
import { useApiRequest } from 'hooks';
import { Preloader } from 'components';
import Comments from './Comments/Comments';

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
  useEffect(() => {
    setLoadingProduct(true);
    productAPI
      .fetchProduct(router.id)
      .then((data) => {
        setLoadingProduct(false);
        setProduct(data);
      })
      .catch((error) => {
        setLoadingProductError(JSON.stringify(error, null, 1));
      });
  }, []);
  return (
    <div>
      {isLoadingProduct && Preloader}
      <h1>{product?.title}</h1>
      <div>
        <h1>{product?.content}</h1>
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
