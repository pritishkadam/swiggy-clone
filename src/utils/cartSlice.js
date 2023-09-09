import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState:
    JSON.parse(localStorage.getItem('items')) !== null
      ? JSON.parse(localStorage.getItem('items'))
      : {},
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      if (state[id]) {
        state[id].quantity += 1;
        localStorage.setItem('items', JSON.stringify(state));
      } else {
        state[id] = { ...action.payload, quantity: 1 };
        localStorage.setItem('items', JSON.stringify(state));
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      if (state[id]) {
        if (state[id].quantity === 1) {
          delete state[id];
          localStorage.setItem('items', JSON.stringify(state));
        } else {
          state[id].quantity -= 1;
          localStorage.setItem('items', JSON.stringify(state));
        }
      }
    },
    clearCart: (state) => {
      Object.keys(state).forEach((key) => {
        delete state[key];
      });
      localStorage.removeItem('items');
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
