import { useState } from 'react';
import { AddMetric } from '../molecules/metricAdd';
import { MetricEfficiency } from '../molecules/metricEfficiency';
import { MetricNotification } from '../molecules/metricNotifications';
import { MetricTask } from '../molecules/metricTask';
import { Modal } from './modal';
import { local } from '../lang/lang';

export const Metrics = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="metrics">
        <MetricTask completed={2} allTask={4} lastTime={local.userProfile.metric.task.lastTime}/>
        <MetricNotification completed={1} allTask={4} lastTime={local.userProfile.metric.notifications.lastTime}/>
        <MetricEfficiency completed={78} allTask={100} lastTime={local.userProfile.metric.efficiency.lastTime}/>

        <AddMetric onClick={() => setIsOpen(true)} />
      </section>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <section className="metrics">
          <MetricTask completed={1} allTask={4} lastTime="00:00" />
          <MetricNotification completed={1} allTask={4} lastTime="00:00"/>
          <MetricEfficiency completed={1} allTask={4} lastTime="00:00" />
        </section>
      </Modal>
    </>
  );
};
