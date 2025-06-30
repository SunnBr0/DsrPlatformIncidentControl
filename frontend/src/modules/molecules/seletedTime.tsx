import { ButtonCalendar } from '../atoms/buttonCalendar';
import { SegmentedControls } from '../atoms/segmentedСontrols';
import { local } from '../lang/lang';

export const SelectedTime = () => {
  return (
    <div className="profile__selected-time">
      <SegmentedControls options={local.userProfile.segmentedControl} />
      <ButtonCalendar />
    </div>
  );
};
