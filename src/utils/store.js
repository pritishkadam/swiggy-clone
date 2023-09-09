import { configureStore } from '@reduxjs/toolkit';
import locationSlice from './locationSlice';
import loginSlice from './loginSlice';
import searchSlice from './searchSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    location: locationSlice,
    login: loginSlice,
    search: searchSlice,
    cart: cartSlice,
  },
});

export default store;
