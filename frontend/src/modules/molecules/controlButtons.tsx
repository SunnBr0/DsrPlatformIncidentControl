import { ButtonIcon } from '../atoms/button/buttonIcon';
import iconSettings from '../../assets/main/analiticsWorkSpace/IconSettings.svg';
import IconKebab from '../../assets/main/analiticsWorkSpace/IconKebab.svg';
import IconOpenInNew from '../../assets/main/analiticsWorkSpace/IconOpenInNew.svg';
export const ControlButtons = () => {
  return (
    <div className="control-buttons">
      <ButtonIcon
        buttonClassName="control-buttons__setting"
        figureClassName="control-buttons__setting__figure"
        src={iconSettings}
      >
        Настроить
      </ButtonIcon>
      <ButtonIcon
        buttonClassName="control-buttons__parameters"
        figureClassName="control-buttons__parameters__figure"
        src={IconKebab}
      ></ButtonIcon>

      <ButtonIcon
        buttonClassName="control-buttons__move-window"
        figureClassName="control-buttons__move-window__figure"
        src={IconOpenInNew}
      ></ButtonIcon>
    </div>
  );
};
