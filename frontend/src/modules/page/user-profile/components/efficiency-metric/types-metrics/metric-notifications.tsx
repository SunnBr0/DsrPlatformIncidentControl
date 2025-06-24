import { MetricPie } from '../../../../util/metric-pie';
import '../../../../../../style/page/user-profile/efficiency-metric/types-metrics/metric-task.scss';
import { ButtonClick } from '../../../../util/button-click';

export const MetricNotification = () => {
  return (
    <article className="metric-task">
      <div className="metric-task__container">
        <h2 className="metric-task__header">Уведомления</h2>
        <MetricPie completed={1} allTask={4} typeValue="part" color="#F2C94C" />
      </div>
      <p className="metric-task__last-time">Последнее обновление в 9:01</p>
      <ButtonClick>Напомнить</ButtonClick>
    </article>
  );
};
