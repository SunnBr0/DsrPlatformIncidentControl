import '../style/pageTemplate.scss';
import '../style/aside.scss';
import '../style/buttonClick.scss';
import '../style/segmentedControls.scss';
import '../style/metricPie.scss';
import '../style/metricTask.scss';
import '../style/metrics.scss';
import '../style/metricNotifications.scss';
import '../style/metricEfficiency.scss';
import '../style/metricAdd.scss';
import '../style/buttonClick.scss';
import '../style/userProfile.scss';
import '../style/header.scss';
import '../style/aside.scss';
import '../style/header.scss';
import '../style/modal.scss';
import '../style/metricModal.scss';
import { Aside } from '../organisms/aside';
import { Header } from '../organisms/header';
import { UserProfile } from '../organisms/userProfile';

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
