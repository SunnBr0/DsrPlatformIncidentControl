import { TitleProfile } from '../atoms/titleProfile';
import { local } from '../lang/lang';
import { ControlButtons } from '../molecules/controlButtons';

export const AnaliticsWorkSpace = () => {
  return (
    <section className="analitics-work-space">
      <section className="analitics-work-space__header" >
        <TitleProfile
          className={"profile__title"}
          header={local.analiticsWorkSpace.header}
          title={local.analiticsWorkSpace.title}
          placeWork={local.analiticsWorkSpace.placeWork}
        />
        <ControlButtons/>
      </section>
    </section>
  );
};
