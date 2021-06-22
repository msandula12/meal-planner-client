import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Day } from 'constants/interfaces';

import type { RootState } from '../store';

interface ScheduleState {
  schedule: Day[];
  selectedDay: Day | undefined;
}

const initialState: ScheduleState = {
  schedule: [],
  selectedDay: undefined,
};

// Slice
export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    changeSchedule: (state, action: PayloadAction<Day[]>) => {
      state.schedule = action.payload;
    },
    changeSelectedDay: (state, action: PayloadAction<Day | undefined>) => {
      state.selectedDay = action.payload;
    },
  },
});

// Actions
export const { changeSchedule, changeSelectedDay } = scheduleSlice.actions;

// Selectors
export const selectSchedule = (state: RootState) => state.schedule.schedule;
export const selectSelectedDay = (state: RootState) =>
  state.schedule.selectedDay;

export default scheduleSlice.reducer;
