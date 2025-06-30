import { ButtonIcon } from '../atoms/buttonIcon';
import { AsideIconSection } from '../molecules/asideIconSection';
import user1 from '../../assets/aside/user1.svg';
import user2 from '../../assets/aside/user2.svg';
import help from '../../assets/aside/help.svg';
export const Aside = () => {
  return (
    <aside className="aside">
      <section className="aside__section">
        <AsideIconSection icons={[user1, user2]} />
        <ButtonIcon buttonClassName="aside__button" figureClassName="aside__help" src={help} />
      </section>
    </aside>
  );
};
