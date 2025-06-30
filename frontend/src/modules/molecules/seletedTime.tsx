import { ButtonCalendar } from '../atoms/button-calendar';
import { SegmentedControls } from '../atoms/segmented-controls';
import { local } from '../lang/lang';

export const SelectedTime = () => {
  return (
    <div className="profile__selected-time">
      <SegmentedControls options={local.userProfile.segmentedControl} />
      <ButtonCalendar />
    </div>
  );
};
