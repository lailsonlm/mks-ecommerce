import { createSlice, current } from '@reduxjs/toolkit'

interface Product {
  amount: number;
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  photo: string;
}

export const slice = createSlice({
  name: 'cart',
  initialState: {
    cart: [] as Product[]
  },
  reducers: {
    addProduct: (state, { payload }) => {
      const updatedCart = [...state?.cart] as Product[]
      const productExists = updatedCart.find(product => product.id === payload.id)

      const currentAmount = productExists ? productExists.amount : 0;
      const amount = currentAmount + 1
      
      if(productExists) {  
        const newCart = updatedCart.map(product => {
          if(product.id === productExists.id) {
            return {
              ...product,
              amount: amount
            }
          }
          return product
        })
        
         return {
          ...state,
          cart: newCart
         }

      } else {
        const newProduct = {
          ...payload,
          amount: 1
        }

        updatedCart.push(newProduct)

        return {
          ...state,
          cart: updatedCart,
        }
      }
    },
    removeProduct: (state, { payload }) => {
      const updatedCart = [...state?.cart] as Product[]
      const productExists = updatedCart.findIndex(product => product.id === payload.id)
      
      if(productExists >= 0) {  
        updatedCart.splice(productExists, 1)

        return {
          ...state,
          cart: updatedCart,
        }
      }
    },
    updateProductAmount: (state, { payload }) => {

      if(payload.amount <= 0) {
        return
      }
      
      const updatedCart = [...state?.cart] as Product[]
      const productExists = updatedCart.find(product => product.id === payload.id)
    
      if(productExists) {
        const newCart = updatedCart.map(product => {
          if(product.id === productExists.id) {
            return {
              ...product,
              amount: payload.amount
            }
          }
          return product
        })

         return {
          ...state,
          cart: newCart
         }
      }
    },
  }
})

export const { addProduct, removeProduct, updateProductAmount } = slice.actions

// export const useAllProducts = state => state.products

export default slice.reducer

