import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PhonesCategoryProps } from './types';

export const newArrivalSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getPhonesByCategory: builder.query<PhonesCategoryProps[], string>({
      query: (category) => `/catalog/phones/category/${category}`,
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetPhonesByCategoryQuery } = newArrivalSlice;
