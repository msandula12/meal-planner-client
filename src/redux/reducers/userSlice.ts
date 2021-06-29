import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'constants/interfaces';

import type { RootState } from '../store';

interface UserState {
  useDarkMode: boolean;
  user: User | null;
}

const initialState: UserState = {
  useDarkMode: false,
  user: null,
};

// Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeDarkMode: (state, action: PayloadAction<boolean>) => {
      state.useDarkMode = action.payload;
    },
    changeUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

// Actions
export const { changeDarkMode, changeUser } = userSlice.actions;

// Selectors
export const selectCurrentUser = (state: RootState) => state.user.user;
export const selectIsDarkMode = (state: RootState) => state.user.useDarkMode;

// Export reducer
export default userSlice.reducer;
