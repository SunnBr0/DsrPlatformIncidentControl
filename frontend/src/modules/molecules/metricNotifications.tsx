import { MetricPie } from '../atoms/metricPie';
import { ButtonClick } from '../atoms/buttonClick';
import { local } from '../lang/lang';

export const MetricNotification = () => {
  return (
    <article className="metric-notifications">
      <div className="metric-notifications__container-graphics">
        <h2 className="metric-notifications__header">
          {local.userProfile.metric.notifications.header}
        </h2>
        <MetricPie completed={1} allTask={4} typeValue="part" color="#F2C94C" />
      </div>
      <div className="metric-notifications__container">
        <p className="metric-notifications__last-time">
          {local.userProfile.metric.notifications.titleLastTime}{' '}
          {local.userProfile.metric.notifications.lastTime}
        </p>
        <ButtonClick buttonClassName="button-click">
          {local.userProfile.metric.notifications.button}
        </ButtonClick>
      </div>
    </article>
  );
};
