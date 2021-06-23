import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface UserState {
  name: string;
}

const initialState: UserState = {
  name: '',
};

// Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

// Actions
export const { changeUser } = userSlice.actions;

// Selectors
export const selectCurrentUser = (state: RootState) => state.user.name;

// Export reducer
export default userSlice.reducer;
