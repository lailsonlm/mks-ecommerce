import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'checkoutIsOpen',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openCheckout(state) {
      return {
        ...state,
        isOpen: true,
      }
    },
    closeCheckout(state) {
      return {
        ...state,
        isOpen: false,
      }
    },
  }
})

export const { openCheckout, closeCheckout } = slice.actions

// export const useAllProducts = state => state.products

export default slice.reducer