import { MetricPie } from '../atoms/metricPie';
import { local } from '../lang/lang';

export const MetricTask = () => {
  return (
    <article className="metric-task">
      <div className="metric-task__container">
        <h2 className="metric-task__header">{local.userProfile.metric.task.header}</h2>
        <MetricPie completed={2} allTask={4} typeValue="part" />
      </div>
      <p className="metric-task__last-time">
        {local.userProfile.metric.task.titleLastTime} {local.userProfile.metric.task.lastTime}
      </p>
    </article>
  );
};
