import { configureStore } from '@reduxjs/toolkit';
import eCommerceReducer from './eCommerceSlice';

export const store = configureStore({
  reducer: {
    ecommerce: eCommerceReducer,
  },
})