import { ButtonCalendar } from '../atoms/button/buttonCalendar';
import { SegmentedControls } from '../atoms/button/segmentedСontrols';
import { local } from '../lang/lang';

export const SelectedTime = () => {
  return (
    <div className="profile__selected-time">
      <SegmentedControls options={local.userProfile.segmentedControl} />
      <ButtonCalendar />
    </div>
  );
};
