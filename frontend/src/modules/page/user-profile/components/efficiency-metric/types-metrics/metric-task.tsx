import { MetricPie } from '../../../../util/metric-pie';
import '../../../../../../style/page/user-profile/efficiency-metric/types-metrics/metric-task.scss';

export const MetricTask = () => {
  return (
    <article className="metric-task">
      <div className="metric-task__container">
        <h2 className="metric-task__header">Количество заданий</h2>
        <MetricPie completed={2} allTask={4} typeValue='part'/>
      </div>
      <p className="metric-task__last-time">Последнее обновление в 12:42</p>
    </article>
  );
};
