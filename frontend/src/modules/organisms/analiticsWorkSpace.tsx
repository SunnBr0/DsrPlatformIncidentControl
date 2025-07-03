import { TitleText } from '../atoms/titleText';
import { local } from '../lang/lang';
import { ControlButtons } from '../molecules/controlButtons';
import { Widgets } from './widgets';

export const AnaliticsWorkSpace = () => {
  return (
    <section className="analitics-work-space">
      <section className="analitics-work-space__header">
        <TitleText
          className={'profile__title'}
          header={local.analiticsWorkSpace.header}
          title={local.analiticsWorkSpace.title}
          placeWork={local.analiticsWorkSpace.placeWork}
        />
        <ControlButtons />
      </section>
      <Widgets />
    </section>
  );
};
