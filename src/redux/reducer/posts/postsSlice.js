import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    isLoading: false,
    users: null,
    isError: null,
  },
  reducers: {
    loading: (state) => {
      state.isLoading = true;
      state.posts = null;
      state.isError = null;
    },
    getData: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    error: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { loading, getData, error } = postsSlice.actions;

export default postsSlice.reducer;
