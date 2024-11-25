import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PhonesProps {
  id: number;
  price: number;
  imgPath: string[];
  isLiked: boolean;
  name: string;
}

export const newArrivalSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getPhonesByCategory: builder.query<PhonesProps[], string>({
      query: (category) => `/catalog/phones/category/${category}`,
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetPhonesByCategoryQuery } = newArrivalSlice;
