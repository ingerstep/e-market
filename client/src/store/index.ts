import { newArrivalSlice } from './newArrivalSlice';
import phonesDiscountReducer from './phonesDiscountSlice';
import { configureStore } from '@reduxjs/toolkit';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [newArrivalSlice.reducerPath]: newArrivalSlice.reducer,
      phonesDiscount: phonesDiscountReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(newArrivalSlice.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
