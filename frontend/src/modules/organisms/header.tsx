import './header.scss';
import { ButtonHeader } from '../atoms/buttonHeader';
import { ButtonNotifications } from '../atoms/buttonNotifications';
import { ButtonUserProfile } from '../atoms/buttonUserProfile';
export const Header = () => {
  return (
    <header className="header">
      <ButtonHeader/>
      <ButtonNotifications/>
      <ButtonUserProfile/>
    </header>
  );
};
