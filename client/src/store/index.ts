import { newArrivalSlice } from './newArrivalSlice';
import phonesDiscountReducer from './phonesDiscountSlice';
import phonesReducer from './phonesSlice';

import { configureStore } from '@reduxjs/toolkit';

export const store = () => {
  return configureStore({
    reducer: {
      [newArrivalSlice.reducerPath]: newArrivalSlice.reducer,
      phonesDiscount: phonesDiscountReducer,
      phones: phonesReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(newArrivalSlice.middleware),
  });
};
