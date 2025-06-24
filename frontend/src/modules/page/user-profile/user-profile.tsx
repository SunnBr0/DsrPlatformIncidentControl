import { Profile } from './components/profile';
import '../../../style/page/user-profile/user-profile.scss';
import { SegmentedControls } from '../util/segmented-controls';
import { ButtonCalendar } from '../util/button-calendar';
import { Metrics } from './components/efficiency-metric/metrics';

export const UserProfile = () => {
  return (
    <section className="profile">
      <Profile />
      <div className="profile__selected-time">
        <SegmentedControls options={['Сегодня', 'Вчера']} />
        <ButtonCalendar />
      </div>
      <Metrics/>
    </section>
  );
};
