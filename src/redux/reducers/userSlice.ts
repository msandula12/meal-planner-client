import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'constants/interfaces';

import type { RootState } from '../store';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

// Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

// Actions
export const { changeUser } = userSlice.actions;

// Selectors
export const selectCurrentUser = (state: RootState) => state.user.user;

// Export reducer
export default userSlice.reducer;
