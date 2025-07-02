import { AnaliticsWorkSpace } from './analiticsWorkSpace';
import { UserProfile } from './userProfile';

export const PersonalBusiness = () => {
  return (
    <section className='personalBusiness'>
      <UserProfile />
      <AnaliticsWorkSpace/>
    </section>
  );
};
