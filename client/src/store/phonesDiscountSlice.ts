import { PhonesProps } from './newArrivalSlice';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface PhonesState {
  phones: PhonesProps[];
  loading: boolean;
  error: string | null;
}

export const fetchPhonesByDiscount = createAsyncThunk<PhonesProps[], void>(
  'phones/fetchPhonesByDiscount',
  async () => {
    const response = await fetch(
      'http://localhost:3000/catalog/phones/category/isDiscounted',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch discounted phones');
    }
    const data: PhonesProps[] = await response.json();
    return data;
  },
);

const initialState: PhonesState = {
  phones: [],
  loading: false,
  error: null,
};

const phonesDiscountSlice = createSlice({
  name: 'phonesDiscount',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhonesByDiscount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhonesByDiscount.fulfilled, (state, action) => {
        state.loading = false;
        state.phones = action.payload;
      })
      .addCase(fetchPhonesByDiscount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error loading phones';
      });
  },
});

export default phonesDiscountSlice.reducer;
