import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Day } from 'constants/interfaces';
import type { RootState } from '../store';

interface ScheduleState {
  schedule: Day[];
  selectedDay: Day | null;
}

const initialState: ScheduleState = {
  schedule: [],
  selectedDay: null,
}

// Slice
export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    changeSelectedDay: (state, action: PayloadAction<Day | null>) => {
      state.selectedDay = action.payload;
    },
  },
});

// Actions
export const { changeSelectedDay } = scheduleSlice.actions;

// Selectors
export const selectSelectedDay = (state: RootState) => state.schedule.selectedDay;

export default scheduleSlice.reducer;