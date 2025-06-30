import { SelectedTime } from '../molecules/seletedTime';
import { MetricTask } from '../molecules/metricTask';
import { MetricNotification } from '../molecules/metricNotifications';
import { MetricEfficiency } from '../molecules/metricEfficiency';
import { AddMetric } from '../molecules/metricAdd';
import { ProfileInfo } from '../molecules/profileInfo';
import { ButtonClick } from '../atoms/buttonClick';
import { local } from '../lang/lang';
import user1 from '../../assets/aside/user1.svg';

export const UserProfile = () => {
  return (
    <section className="profile">
      <section className="profile__people">
        <ProfileInfo src={user1} />
        <ButtonClick buttonClassName="profile__button">{local.userProfile.button}</ButtonClick>
      </section>
      <SelectedTime />
      <section className="metrics">
        <MetricTask />
        <MetricNotification />
        <MetricEfficiency />
        <AddMetric />
      </section>
    </section>
  );
};
