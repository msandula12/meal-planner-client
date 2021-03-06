import { configureStore } from '@reduxjs/toolkit';

import scheduleReducer from './reducers/scheduleSlice';
import userReducer from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { schedule: ScheduleState, ...etc. }
export type AppDispatch = typeof store.dispatch;
