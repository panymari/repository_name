import { createSlice } from '@reduxjs/toolkit';

export const googleUserSlice = createSlice({
  name: 'googleUser',
  initialState: {
    googleUser: null,
  },
  reducers: {
    setData: (state, action) => {
      state.googleUser = action.payload;
    },
  },
});

export const { setData } = googleUserSlice.actions;

export default googleUserSlice.reducer;
