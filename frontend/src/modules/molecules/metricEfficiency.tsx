import { MetricPie } from '../atoms/metricPie';
import { local } from '../lang/lang';
type TMetricEfficiency = {
  completed: number;
  allTask: number;
  lastTime: string;
};

export const MetricEfficiency = ({ completed, allTask, lastTime }: TMetricEfficiency) => {
  return (
    <article className="metric-efficiency">
      <div className="metric-efficiency__container">
        <h2 className="metric-efficiency__header">{local.userProfile.metric.efficiency.header}</h2>
        <MetricPie completed={completed} allTask={allTask} typeValue="percent" />
      </div>
      <p className="metric-efficiency__last-time">
        {local.userProfile.metric.efficiency.titleLastTime} {lastTime}
      </p>
    </article>
  );
};
