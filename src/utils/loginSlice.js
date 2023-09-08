import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoginOpen: false,
  },
  reducers: {
    toggle_login: (state) => {
      state.isLoginOpen = !state.isLoginOpen;
    },
    open_login: (state) => {
      state.isLoginOpen = true;
    },
    close_login: (state) => {
      state.isLoginOpen = false;
    },
  },
});

export default loginSlice.reducer;

export const { toggle_login, open_login, close_login } = loginSlice.actions;
