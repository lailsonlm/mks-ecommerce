import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type GetAllProduts = {
  count: number;
  products: {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: string;
    photo: string;
  }[]
}
// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mks-frontend-challenge-api.herokuapp.com/api/v1' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<GetAllProduts, {}>({
      query: () => ({
        url: `products`, 
        params: {
          page: 1,
          rows: 8,
          sortBy: 'name',
          orderBy: 'ASC'
        } 
      })
    }),
  }),
})

export const { useGetAllProductsQuery } = productsApi