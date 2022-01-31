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
    setData: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { loading, setData, setError } = usersSlice.actions;

export default usersSlice.reducer;
