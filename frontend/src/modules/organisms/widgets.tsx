import { CountIncidents } from '../molecules/widgets/countIncidents';
import { IndicatorKPI } from '../molecules/widgets/indicatorKPI';

export const Widgets = () => {
  return (
    <section className='widgets'>
      <CountIncidents />
      <IndicatorKPI />
    </section>
  );
};
