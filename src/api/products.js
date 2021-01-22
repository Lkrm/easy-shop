import api from './api';
import { ENDPOINTS } from './api.constants';

/**
 @async fetchProducts
 Function for fetching products of API.
 In fulfilled case - return array of products
 In failure case - return object of error
 @param limit {number} - count of products
 @param offset {number} - offset from that start to receive products
 @return {promise}
 */
export const fetchProducts = (limit, offset) =>
  api.get(ENDPOINTS.products, { params: { limit, offset } }).then((res) => res.data);

/**
 @async fetchProduct
 Function for fetching product by id of API.
 In fulfilled case - return object of product
 In failure case - return object of error
 @param productId {number} - product id to fetch
 @return {promise}
 */
export const fetchProduct = (productId) =>
  api.get(ENDPOINTS.productById.replace(':id', productId)).then((res) => res.data);
