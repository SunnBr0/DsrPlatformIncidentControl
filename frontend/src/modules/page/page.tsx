import { Header,Aside ,UserProfile} from '../components';
import './page.scss';
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
