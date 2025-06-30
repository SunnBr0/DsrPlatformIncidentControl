import notification from '../../../assets/header/notification.svg';
import button from '../../../assets/header/Button.svg';
import { local } from '../../lang/lang';
import './header.scss';
export const Header = () => {
  return (
    <header className="header">
      <p className="header__title">{local.header.title}</p>
      <figure className="header__notification">
        <img src={notification} alt="" />
      </figure>
      <figure className="header__button">
        <img src={button} alt="" />
      </figure>
    </header>
  );
};
