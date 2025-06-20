import { Header } from './header/header';
import { Aside } from './aside/aside';
import '../../style/page/page.scss';
import { UserProfile } from './user-profile/user-profile';
export const Page = () => {
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
