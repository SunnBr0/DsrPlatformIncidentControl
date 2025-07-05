import { ButtonIcon } from '../../atoms/button/buttonIcon';
import { TitleText } from '../../atoms/titleText';
import { local } from '../../lang/lang';
import IconDraggable from '../../../assets/main/analiticsWorkSpace/IconDraggable.svg';
import { ButtonClick } from '../../atoms/button/buttonClick';
import { CustomDateRangePicker} from '../../atoms/button/dateRangePicker';
import { WidgetLineChart } from '../../atoms/graphs/widgetLineChart';

export const IndicatorKPI = () => {
  return (
    <article className="indicator-kpi">
      <section className="indicator-kpi__description">
        <section className="indicator-kpi__header">
          <TitleText
            className=""
            header={local.analiticsWorkSpace.widgets.indicatorKPI.header}
            title={local.analiticsWorkSpace.widgets.indicatorKPI.title}
          />
          <ButtonIcon
            buttonClassName="control-buttons__parameters"
            figureClassName="control-buttons__parameters__figure"
            src={IconDraggable}
          ></ButtonIcon>
        </section>
        <section className="indicator-kpi__buttons">
          <CustomDateRangePicker/>
          <ButtonClick>{local.analiticsWorkSpace.widgets.countIncidents.button}</ButtonClick>
        </section>
      </section>
      <section className="indicator-kpi__content">
        <WidgetLineChart/>
      </section>
    </article>
  );
};
