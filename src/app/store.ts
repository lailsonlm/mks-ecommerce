import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../lib/rtkQuery'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import cartReducer from './cartSlice'
import checkoutIsOpenReducer from './checkoutSlice'

const persistConfig = {
  key: 'cart',
  storage,
  timeout: 2000
};
const reducers = combineReducers({
  cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persistedReducer,
    checkoutIsOpen: checkoutIsOpenReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }).concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch