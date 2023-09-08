import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchQuery: '',
  },
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export default searchSlice.reducer;

export const { updateSearchQuery } = searchSlice.actions;
