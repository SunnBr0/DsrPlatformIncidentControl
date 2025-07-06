import { type RootState } from '../../store/store';

export const selectChartData = (state: RootState) => state.chart.data;
