import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Phone, PhonesState } from './types';

export const fetchPhones = createAsyncThunk<Phone[], void>(
  'phones/fetchPhones',
  async () => {
    const response = await fetch('http://localhost:3000/catalog/phones');
    if (!response.ok) {
      throw new Error('Failed to fetch phones');
    }
    const data = await response.json();
    return data;
  },
);

const initialState: PhonesState = {
  phones: [],
  loading: false,
  error: null,
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhones.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhones.fulfilled, (state, action) => {
        state.loading = false;
        state.phones = action.payload;
      })
      .addCase(fetchPhones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error loading phones';
      });
  },
});

export default phonesSlice.reducer;
