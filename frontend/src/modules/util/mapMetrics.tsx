import type { ReactNode } from "react";
import { local } from "../lang/lang";
import { MetricTask } from "../molecules/metrics/metricTask";
import { MetricNotification } from "../molecules/metrics/metricNotifications";
import { MetricEfficiency } from "../molecules/metrics/metricEfficiency";

export type TMetricType = 'task' | 'notification' | 'efficiency';
export type TMetricData = {
  header: string;
  component: ReactNode;
};
export const mapMetrics = new Map<TMetricType, TMetricData>([
  [
    'task',
    {
      header: local.userProfile.metric.task.header,
      component: (
        <MetricTask completed={2} allTask={4} lastTime={local.userProfile.metric.task.lastTime} />
      ),
    },
  ],
  [
    'notification',
    {
      header: local.userProfile.metric.notifications.header,
      component: (
        <MetricNotification
          completed={1}
          allTask={4}
          lastTime={local.userProfile.metric.notifications.lastTime}
        />
      ),
    },
  ],
  [
    'efficiency',
    {
      header: local.userProfile.metric.efficiency.header,
      component: (
        <MetricEfficiency
          completed={78}
          allTask={100}
          lastTime={local.userProfile.metric.efficiency.lastTime}
        />
      ),
    },
  ],
]);
