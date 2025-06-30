import { MetricPie } from '../atoms/metric-pie';
import { local } from '../lang/lang';

export const MetricEfficiency = () => {
  return (
    <article className="metric-efficiency">
      <div className="metric-efficiency__container">
        <h2 className="metric-efficiency__header">{local.userProfile.metric.efficiency.header}</h2>
        <MetricPie completed={78} allTask={100} typeValue="percent" />
      </div>
      <p className="metric-efficiency__last-time">
        {local.userProfile.metric.efficiency.titleLastTime}{' '}
        {local.userProfile.metric.efficiency.lastTime}
      </p>
    </article>
  );
};
