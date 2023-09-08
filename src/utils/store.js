import { configureStore } from '@reduxjs/toolkit';
import locationSlice from './locationSlice';
import loginSlice from './loginSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    location: locationSlice,
    login: loginSlice,
    search: searchSlice
  },
});

export default store;
