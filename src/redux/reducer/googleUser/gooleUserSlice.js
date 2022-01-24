import { createSlice } from '@reduxjs/toolkit';

export const googleUserSlice = createSlice({
  name: 'googleUser',
  initialState: {
    googleUser: null,
  },
  reducers: {
    getData: (state, action) => {
      state.googleUser = action.payload;
    },
  },
});

export const { getData } = googleUserSlice.actions;

export default googleUserSlice.reducer;
