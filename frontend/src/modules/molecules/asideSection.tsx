import { ButtonHelp } from '../atoms/buttonHelp';
import { IconAside } from '../atoms/iconAside';
import user1 from '../../../assets/aside/user1.svg';
import user2 from '../../../assets/aside/user2.svg';
import help from '../../../assets/aside/help.svg';
export const AsideSection = () => {
  return (
    <section className="aside__section">
      <IconAside src={user1} />
      <IconAside src={user2} />
      <ButtonHelp src={help} />
    </section>
  );
};
