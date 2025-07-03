import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { TitleText } from '../titleText';
import { local } from '../../lang/lang';

const data = [
  { name: 'Активные', value: 5 },
  { name: 'Закрытые', value: 10 },
  { name: 'Новые', value: 5 },
];

const COLORS = ['#1AC888', '#F39C12', '#1A1A1A'];

export const WidgetPie = () => {
  return (
    <section className="widget-pie">
      <div className="widget-pie__value">
        <TitleText
          className="widget-pie__title"
          header="24"
          title={local.analiticsWorkSpace.widgets.countIncidents.pie}
        />
      </div>
      <ResponsiveContainer width={357} height={231}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx={112}
            cy="50%"
            innerRadius={80}
            outerRadius={115}
            stroke="none"
            startAngle={-90}
            endAngle={-450}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
            {/* {renderCenterText()} */}
          </Pie>
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={10}
            wrapperStyle={{marginTop:"0px"}}
            formatter={(value) => <span className="widget-pie__legend">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};
