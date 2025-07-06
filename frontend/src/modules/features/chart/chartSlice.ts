import { createSlice,type PayloadAction } from '@reduxjs/toolkit';

interface ChartDataItem {
  date: string;
  value: number;
}

interface ChartState {
  data: ChartDataItem[];
}

const initialState: ChartState = {
  data: [
    { date: '2025-01-01', value: 100 },
    { date: '2025-01-10', value: 115 },
    { date: '2025-01-20', value: 120 },
    { date: '2025-02-10', value: 130 },
    { date: '2025-02-25', value: 125 },
    { date: '2025-03-03', value: 150 },
    { date: '2025-03-04', value: 145 },
    { date: '2025-03-15', value: 140 },
    { date: '2025-04-01', value: 160 },
    { date: '2025-04-18', value: 155 },
    { date: '2025-05-02', value: 110 },
    { date: '2025-05-30', value: 108 },
    { date: '2025-06-10', value: 115 },
    { date: '2025-06-30', value: 118 }, 
  ],
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<ChartDataItem[]>) {
      state.data = action.payload;
    },
  },
});

export const { setData } = chartSlice.actions;
export default chartSlice.reducer;
