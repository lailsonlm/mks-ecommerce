import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    getAllProducts(state, { payload }) {
      return {
        ...state,
        products: payload,
      }
    }
  }
})

export const { getAllProducts } = slice.actions

// export const useAllProducts = state => state.products

export default slice.reducer