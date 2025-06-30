import '../style/pageTemplate.scss';
import '../style/aside.scss';
import '../style/button-click.scss';
import '../style/segmented-controls.scss';
import '../style/metric-pie.scss';
import '../style/metric-task.scss';
import '../style/metrics.scss';
import '../style/metric-notifications.scss';
import '../style/metric-efficiency.scss';
import '../style/metric-add.scss';
import '../style/button-click.scss';
import '../style/user-profile.scss';
import '../style/header.scss';
import '../style/aside.scss';
import '../style/header.scss';
import { Aside } from '../organisms/aside';
import { Header } from '../organisms/header';
import { UserProfile } from '../organisms/user-profile';

export const PageTemplate = () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <Aside />
        <UserProfile />
      </main>
    </>
  );
};
