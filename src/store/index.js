import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cart from './cart';

const rootReducer = combineReducers({
  cart,
});

export default configureStore({
  reducer: rootReducer,
  devTools: true,
});
