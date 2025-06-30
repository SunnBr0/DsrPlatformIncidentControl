import { ButtonIcon } from '../atoms/buttonIcon';
import { local } from '../lang/lang';
import notification from '../../assets/header/notification.svg';
import button from '../../assets/header/Button.svg';

export const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title" >{local.header.title}</h2>
      <ButtonIcon buttonClassName="header__button" figureClassName="header__notification" src={notification}/>
      <ButtonIcon buttonClassName="header__button" figureClassName="header__segments" src={button}/>
    </header>
  );
};
