import { createSlice } from '@reduxjs/toolkit';
import { createSagaAction } from 'saga-toolkit';

const name = 'users';

const initialState = {
  isLoading: false,
  users: null,
  isError: null,
};

export const fetchThings = createSagaAction(`${name}/fetchThings`);

const usersSlice = createSlice({
  name,
  initialState,
  extraReducers: {
    [fetchThings.loading]: (state) => ({
      ...state,
      isLoading: true,
      users: null,
      isError: null,
    }),
    [fetchThings.setData]: (state, { payload }) => ({
      ...state,
      users: payload,
      isLoading: false,
    }),
    [fetchThings.error]: (state, { payload }) => ({
      ...state,
      isError: payload,
      isLoading: false,
    }),
  },
});

// export const { loading, setData, error } = usersSlice.actions;
export default usersSlice.reducer;
