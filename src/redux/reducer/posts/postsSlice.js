import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    isLoading: false,
    posts: null,
    isError: null,
  },
  reducers: {
    loading: (state) => {
      state.isLoading = true;
      state.posts = null;
      state.isError = null;
    },
    setData: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { loading, setData, setError } = postsSlice.actions;

export default postsSlice.reducer;
