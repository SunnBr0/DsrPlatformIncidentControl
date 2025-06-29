import { MetricPie } from '../../../util/metric-pie';
import './metric-notifications.scss';
import { ButtonClick } from '../../../util/button-click';

export const MetricNotification = () => {
  return (
    <article className="metric-notifications">
      <div className="metric-notifications__container-graphics">
        <h2 className="metric-notifications__header">Уведомления</h2>
        <MetricPie completed={1} allTask={4} typeValue="part" color="#F2C94C" />
      </div>
      <div className='metric-notifications__container'>
        <p className="metric-notifications__last-time">Последнее обновление в 9:01</p>
        <ButtonClick>Напомнить</ButtonClick>
      </div>
    </article>
  );
};
