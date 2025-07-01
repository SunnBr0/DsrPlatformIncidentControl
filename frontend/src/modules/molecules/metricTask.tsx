import { MetricPie } from '../atoms/metricPie';
import { local } from '../lang/lang';
type TMetricTask = {
  completed: number;
  allTask: number;
  lastTime:string
};

export const MetricTask = ({ completed, allTask,lastTime }:TMetricTask) => {
  return (
    <article className="metric-task">
      <div className="metric-task__container">
        <h2 className="metric-task__header">{local.userProfile.metric.task.header}</h2>
        <MetricPie completed={completed} allTask={allTask} typeValue="part" />
      </div>
      <p className="metric-task__last-time">
        {local.userProfile.metric.task.titleLastTime} {lastTime}
      </p>
    </article>
  );
};
