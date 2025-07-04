import { ButtonIcon } from '../../atoms/button/buttonIcon';
import IconDraggable from '../../../assets/main/analiticsWorkSpace/IconDraggable.svg';
import { local } from '../../lang/lang';
import { SegmentedControls } from '../../atoms/button/segmentedСontrols';
import { ButtonClick } from '../../atoms/button/buttonClick';
import { WidgetPie } from '../../atoms/graphs/widgetPie';
export const CountIncidents = () => {
  return (
    <article className="count-incidents">
      <section className="count-incidents__description">
        <section className="count-incidents__header">
          <h2>{local.analiticsWorkSpace.widgets.countIncidents.header}</h2>
          <ButtonIcon
            buttonClassName="control-buttons__parameters"
            figureClassName="control-buttons__parameters__figure"
            src={IconDraggable}
          ></ButtonIcon>
        </section>
        <section className="count-incidents__buttons">
          <SegmentedControls
            className="segmented-controls__widgets--count-incidents"
            options={local.analiticsWorkSpace.widgets.countIncidents.segmentedControls}
          />
          <ButtonClick>{local.analiticsWorkSpace.widgets.countIncidents.button}</ButtonClick>
        </section>
      </section>
      <section className='count-incidents__content'>
        <WidgetPie/>
      </section>
    </article>
  );
};
