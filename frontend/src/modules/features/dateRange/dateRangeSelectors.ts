import { createSelector } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { type RootState } from '../../store/store';

export const selectStartDateString = (state: RootState) => state.dateRange.startDate;
export const selectEndDateString = (state: RootState) => state.dateRange.endDate;

export const selectStartDate = createSelector(
  selectStartDateString,
  (start) => (start ? dayjs(start) : null)
);

export const selectEndDate = createSelector(
  selectEndDateString,
  (end) => (end ? dayjs(end) : null)
);