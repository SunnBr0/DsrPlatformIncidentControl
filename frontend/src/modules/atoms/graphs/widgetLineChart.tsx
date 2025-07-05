import dayjs from 'dayjs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip } from 'recharts';

const rawData = [
  { date: '2025-01-01', value: 100 },
  { date: '2025-01-10', value: 115 },
  { date: '2025-01-20', value: 120 },
  { date: '2025-02-10', value: 130 },
  { date: '2025-02-25', value: 125 },
  { date: '2025-03-03', value: 150 },
  { date: '2025-03-03', value: 150 },
  { date: '2025-03-03', value: 150 },
  { date: '2025-03-03', value: 150 },
  { date: '2025-03-03', value: 150 },
  { date: '2025-03-03', value: 150 },
  { date: '2025-03-03', value: 150 },
  { date: '2025-03-15', value: 140 },
  { date: '2025-04-01', value: 160 },
  { date: '2025-04-18', value: 155 },
  { date: '2025-05-02', value: 110 },
  { date: '2025-05-30', value: 108 },
  { date: '2025-06-10', value: 115 },
  { date: '2025-06-31', value: 118 },
];

const minDate = dayjs('2025-01-01');
const maxDate = dayjs('2025-06-31');
// data изменять под диапозон 
const data = rawData.map((item) => ({
  ...item,
  timestamp: dayjs(item.date).valueOf(),
}));

const ticks: number[] = [];
for (let d = minDate; d.isBefore(maxDate); d = d.add(1, 'month')) {
  ticks.push(d.valueOf());
}

export const WidgetLineChart = () => {
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
      <ReferenceLine y={110} stroke="#FFA726" strokeDasharray="3 3" />
      <Line dataKey="value" stroke="#82CAFF" strokeWidth={1} dot={false} />
    </LineChart>
  );
};

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip } from 'recharts';
// import dayjs from 'dayjs';
// import 'dayjs/locale/ru';

// // Подготовка данных по дням
// const rawData = [
//   { date: '2025-01-05', value: 100 },
//   { date: '2025-01-10', value: 115 },
//   { date: '2025-01-20', value: 120 },
//   { date: '2025-02-10', value: 130 },
//   { date: '2025-02-25', value: 125 },
//   { date: '2025-03-03', value: 150 },
//   { date: '2025-03-03', value: 150 },
//   { date: '2025-03-03', value: 150 },
//   { date: '2025-03-03', value: 150 },
//   { date: '2025-03-03', value: 150 },
//   { date: '2025-03-03', value: 150 },
//   { date: '2025-03-03', value: 150 },
//   { date: '2025-03-15', value: 140 },
//   { date: '2025-04-01', value: 160 },
//   { date: '2025-04-18', value: 155 },
//   { date: '2025-05-02', value: 110 },
//   { date: '2025-05-30', value: 108 },
//   { date: '2025-06-10', value: 115 },
//   { date: '2025-06-28', value: 118 },
// ];

// // Преобразуем строки в числа (timestamp)
// const data = rawData.map((item) => ({
//   ...item,
//   timestamp: dayjs(item.date).valueOf(), // число
// }));

// export const WidgetLineChart = () => {
//   return (
//     <LineChart
//       width={375}
//       height={231}
//       data={data}
//       margin={{ top: 9, right: 6, left: 6, bottom: 13 }}
//       style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}
//     >
//       <CartesianGrid stroke="#3A3F44" />
//       <XAxis
//         dataKey="timestamp"
//         type="number"
//         domain={['dataMin', 'dataMax']}
//         scale="auto"
//         tickFormatter={(tick) => dayjs(tick).format('MM')}
//         tick={{ fontFamily: 'Roboto', fill: '#FAFAFA', fontSize: 12 }}
//         axisLine={false}
//         label={{
//           value: 'Месяц',
//           position: 'insideBottom',
//           dy: 16,
//           fontFamily: 'Inter',
//           fontWeight: 300,
//           fontSize: '12px',
//           fill: 'rgba(255, 255, 255, 0.6)',
//         }}
//       />
//       <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
//       <ReferenceLine y={110} stroke="#FFA726" strokeDasharray="3 3" />
//       <Tooltip labelFormatter={(tick) => dayjs(tick).format('DD.MM')} />
//       <Line type="monotone" dataKey="value" stroke="#82CAFF" strokeWidth={1} dot={false} />
//     </LineChart>
//   );
// };
