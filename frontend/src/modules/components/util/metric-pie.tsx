import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import './metric-pie.scss';
type TPropsPie = {
  completed: number;
  allTask: number;
  typeValue?: string;
  color?: string;
};

export const MetricPie: React.FC<TPropsPie> = ({
  completed,
  allTask,
  typeValue = 'part',
  color = '#24C38E',
}) => {
  const part = completed;
  const total = allTask;
  const percent = (part / total) * 100;
  const data = [
    {
      name: 'progress',
      value: percent,
      fill: color,
    },
  ];
  return (
    <div className="metric-pie">
      <div className="metric-pie__value">
        {typeValue === 'part' && `${part} / ${total}`}
        {typeValue === 'percent' && `${percent}%`}
      </div>
      <RadialBarChart
        width={75}
        height={75}
        innerRadius="83%"
        outerRadius="100%"
        barSize={20}
        data={data}
        startAngle={-90}
        endAngle={-450}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar
          background={{ fill: "#161A1D" }}
          dataKey="value"
          animationDuration={1500}
          animationEasing="ease-out"
        />
      </RadialBarChart>
    </div>
  );
};
