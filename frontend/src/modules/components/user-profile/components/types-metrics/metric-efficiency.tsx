import { MetricPie } from '../../../util/metric-pie';
import './metric-task.scss';

export const MetricEfficiency = () => {
  return (
    <article className="metric-task">
      <div className="metric-task__container">
        <h2 className="metric-task__header">Показатель эффективности</h2>
        <MetricPie completed={78} allTask={100} typeValue="percent" />
      </div>
      <p className="metric-task__last-time">Последняя активность в 13:08</p>
    </article>
  );
};
