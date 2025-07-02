import { MetricPie } from '../../atoms/metricPie';
import { ButtonClick } from '../../atoms/button/buttonClick';
import { local } from '../../lang/lang';
type TMetricNotification = {
  completed: number;
  allTask: number;
  lastTime: string;
};

export const MetricNotification = ({ completed, allTask, lastTime }: TMetricNotification) => {
  return (
    <article className="metric-notifications">
      <div className="metric-notifications__container-graphics">
        <h2 className="metric-notifications__header">
          {local.userProfile.metric.notifications.header}
        </h2>
        <MetricPie completed={completed} allTask={allTask} typeValue="part" color="#F2C94C" />
      </div>
      <div className="metric-notifications__container">
        <p className="metric-notifications__last-time">
          {local.userProfile.metric.notifications.titleLastTime}{' '}
          {lastTime}
        </p>
        <ButtonClick buttonClassName="button-click">
          {local.userProfile.metric.notifications.button}
        </ButtonClick>
      </div>
    </article>
  );
};
