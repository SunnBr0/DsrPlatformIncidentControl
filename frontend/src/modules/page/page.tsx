import { Header } from './header/header';
import { Aside } from './aside/aside';
import '../../style/page/page.scss';
export const Page = () => {
  return (
    <>
      <Header />
      <main>
        <Aside />
      </main>
    </>
  );
};
