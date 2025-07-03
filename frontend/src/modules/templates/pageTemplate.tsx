import '../style/pageTemplate.scss';
import '../style/button/buttonClick.scss';
import '../style/button/segmentedControls.scss';
import '../style/button/buttonClick.scss';
import '../style/button/control-buttons.scss';
import '../style/graphs/metricPie.scss';
import '../style/graphs/widgetPie.scss';
import '../style/metrics/metricTask.scss';
import '../style/metrics/metrics.scss';
import '../style/metrics/metricNotifications.scss';
import '../style/metrics/metricEfficiency.scss';
import '../style/metrics/metricAdd.scss';
import '../style/organisms/aside.scss';
import '../style/organisms/userProfile.scss';
import '../style/organisms/header.scss';
import '../style/organisms/aside.scss';
import '../style/organisms/header.scss';
import '../style/organisms/personalBusiness.scss';
import '../style/organisms/analiticsWorkSpace.scss';
import '../style/modal/modal.scss';
import '../style/modal/metricModal.scss';
import '../style/widgets/countIncidents.scss';
import '../style/widgets/widgets.scss';
import { Aside } from '../organisms/aside';
import { Header } from '../organisms/header';
import { PersonalBusiness } from '../organisms/personalBusiness';

export const PageTemplate = () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <Aside />
        <PersonalBusiness />
      </main>
    </>
  );
};
