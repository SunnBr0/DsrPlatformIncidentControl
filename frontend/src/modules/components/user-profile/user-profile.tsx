import { Profile } from './components/profile';
import './user-profile.scss';
import { SegmentedControls } from '../util/segmented-controls';
import { ButtonCalendar } from '../util/button-calendar';
import { Metrics } from './components/types-metrics/metrics';
import { local } from '../../lang/lang';

export const UserProfile = () => {
  return (
    <section className="profile">
      <Profile />
      <div className="profile__selected-time">
        <SegmentedControls options={local.userProfile.segmentedControl} />
        <ButtonCalendar />
      </div>
      <Metrics/>
    </section>
  );
};
