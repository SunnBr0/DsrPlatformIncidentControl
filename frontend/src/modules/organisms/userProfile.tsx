import { SelectedTime } from '../molecules/seletedTime';
import { ProfileInfo } from '../molecules/profileInfo';
import { ButtonClick } from '../atoms/button/buttonClick';
import { local } from '../lang/lang';
import user1 from '../../assets/aside/user1.svg';
import { Metrics } from './metrics';

export const UserProfile = () => {
  return (
    <section className="profile">
      <section className="profile__people">
        <ProfileInfo src={user1} />
        <ButtonClick buttonClassName="profile__button">{local.userProfile.button}</ButtonClick>
      </section>
      <SelectedTime />
      <Metrics/>
    </section>
  );
};
