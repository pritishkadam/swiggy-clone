import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    isLocationOpen: false,
    locationID: 'Mumbai',
  },
  reducers: {
    toggle_menu: (state) => {
      state.isLocationOpen = !state.isLocationOpen;
    },
    open_menu: (state) => {
      state.isLocationOpen = true;
    },
    close_menu: (state) => {
      state.isLocationOpen = false;
    },
    setLocationID: (state, action) => {
      state.locationID = action.payload;
    },
  },
});

export default locationSlice.reducer;

export const { toggle_menu, open_menu, close_menu, setLocationID } =
  locationSlice.actions;
