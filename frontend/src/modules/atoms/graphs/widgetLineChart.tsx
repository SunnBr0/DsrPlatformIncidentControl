import dayjs from 'dayjs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip } from 'recharts';
import { selectEndDate, selectStartDate } from '../../features/dateRange/dateRangeSelectors';
import { useAppSelector } from '../../store/hooks';
import { selectChartData } from '../../features/chart/chartSelectors';

export const WidgetLineChart = () => {
  const chartData = useAppSelector(selectChartData);
  const startDate = useAppSelector(selectStartDate);
  const endDate = useAppSelector(selectEndDate);

  const boundaryBar = 119;
  const minDate = startDate || dayjs('2025-01-01');
  const maxDate = endDate || dayjs('2025-07-31');
  const data = chartData
    .filter((item) => {
      const date = dayjs(item.date);
      return date.isAfter(minDate.subtract(1, 'day')) && date.isBefore(maxDate.add(1, 'day'));
    })
    .map((item) => ({
      ...item,
      timestamp: dayjs(item.date).valueOf(),
    }));

  const ticks: number[] = [];
  for (let d = minDate; d.isBefore(maxDate); d = d.add(1, 'month')) {
    ticks.push(d.valueOf());
  }

  return (
    <LineChart
      width={375}
      height={231}
      data={data}
      margin={{ top: 9, right: 6, left: 6, bottom: 13 }}
      style={{
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <CartesianGrid stroke="#3A3F44" />
      <XAxis
        style={{
          fontFamily: 'Roboto',
          fontStyle: ' normal',
          fontWeight: 300,
          fontSize: '12px',
        }}
        dataKey="timestamp"
        type="number"
        ticks={ticks}
        domain={['dataMin', 'dataMax']}
        // scale="auto"
        tickFormatter={(tick) => dayjs(tick).format('MM')}
        tick={{ fontFamily: 'Roboto', fill: '#FAFAFA' }}
        axisLine={false}
        tickLine={true}
        label={{
          value: 'Месяц',
          position: 'insideBottom',
          dy: 16,
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '12px',
          textAlign: 'center',
          fill: 'rgba(255, 255, 255, 0.6)',
        }}
      />
      <Tooltip labelFormatter={(tick) => dayjs(tick).format('DD.MM')} />
      <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
      <ReferenceLine y={boundaryBar} stroke="#FFA726" strokeDasharray="3 3" />
      <Line dataKey="value" stroke="#82CAFF" strokeWidth={1} dot={false} />
    </LineChart>
  );
};
