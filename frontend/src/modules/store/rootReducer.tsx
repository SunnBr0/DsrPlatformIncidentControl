import { combineReducers } from '@reduxjs/toolkit';
import dateRangeReducer from '../features/dateRange/dateRangeSlice';
import chartReducer from '../features/chart/chartSlice';
const rootReducer = combineReducers({
  dateRange: dateRangeReducer,
  chart: chartReducer,
});

export default rootReducer;
