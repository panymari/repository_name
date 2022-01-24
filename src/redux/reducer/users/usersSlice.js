import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    users: null,
    isError: null,
  },
  reducers: {
    loading: (state) => {
      state.isLoading = true;
      state.users = null;
      state.isError = null;
    },
    getData: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    error: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { loading, getData, error } = usersSlice.actions;

export default usersSlice.reducer;
