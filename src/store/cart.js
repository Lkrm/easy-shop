import { createSelector, createSlice } from '@reduxjs/toolkit';

export const rootSelector = (state) => state.cart;
export const cartEntitiesSelector = createSelector(rootSelector, (result) => result.entities);
export const cartTotalPriceSelector = createSelector(cartEntitiesSelector, (entities) =>
  Object.values(entities).reduce((total, product) => total + product.count * product.price, 0),
);
export const cartEntitiesCountSelector = createSelector(
  rootSelector,
  (result) => Object.values(result.entities).length,
);

const slice = createSlice({
  name: 'carts',
  initialState: {
    entities: {},
  },
  reducers: {
    addProductToCart(state, action) {
      const product = action.payload;

      state.entities[product.id] = { ...product, count: 1 };
    },
    deleteProductOfCart(state, action) {
      const productId = action.payload;
      const newListOfProducts = Object.entries(state.entities).filter(([, product]) => product.id !== productId);

      state.entities = Object.fromEntries(newListOfProducts);
    },
    updateProductCount(state, action) {
      const { productId, count } = action.payload;

      state.entities[productId].count = count;
    },
  },
});

export default slice.reducer;
export const { addProductToCart, deleteProductOfCart, updateProductCount } = slice.actions;
