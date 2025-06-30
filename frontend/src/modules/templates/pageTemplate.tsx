import { Aside } from '../organisms/aside';
import { Header } from '../organisms/header';

export const PageTemplate = () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <Aside />
        {/* <UserProfile /> */}
      </main>
    </>
  );
};
