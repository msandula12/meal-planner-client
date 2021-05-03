import { configureStore } from '@reduxjs/toolkit';

import scheduleReducer from './reducers/scheduleSlice';

const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;