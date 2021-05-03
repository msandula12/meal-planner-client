import { configureStore } from '@reduxjs/toolkit';

import scheduleReducer from './reducers/scheduleSlice';

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { schedule: ScheduleState, ...etc. }
export type AppDispatch = typeof store.dispatch;