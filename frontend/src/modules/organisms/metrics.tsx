import { useState } from 'react';
import { AddMetric } from '../molecules/metrics/metricAdd';
import { Modal } from '../molecules/modal';
import { mapMetrics } from '../util/mapMetrics';
import type { TMetricType } from '../util/mapMetrics';

export const Metrics = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<TMetricType[]>([]);

  const handleAddMetric = (metricType: TMetricType) => {
    if (!metrics.includes(metricType)) {
      setMetrics([...metrics, metricType]);
    } else {
      setMetrics(metrics.filter((item) => item !== metricType));
    }
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <section className="metrics">
          {metrics.map((item) => mapMetrics.get(item)?.component)}
          <AddMetric onClick={() => setIsOpen(true)} />
        </section>
      )}
      <Modal isOpen={isOpen}>
        <section className="metric-modal">
          {Array.from(mapMetrics.entries()).map(([type, item]) => (
            <button key={type} className="metric-modal__item" onClick={() => handleAddMetric(type)}>
              <h2 className="metric-modal__header">{item.header}</h2>
            </button>
          ))}
          <button className="metric-modal__item--close" onClick={() => setIsOpen(false)}>
            <h2 className="metric-modal__header">Закрыть</h2>
          </button>
        </section>
      </Modal>
    </>
  );
};
