import { ButtonIcon } from '../atoms/buttonIcon';
type TAsideIconSection = {
  icons: string[];
};
export const AsideIconSection = ({ icons }: TAsideIconSection) => {
  return (
    <>
      {icons.map((item) => (
        <ButtonIcon buttonClassName="aside__button-icon" figureClassName="aside__icon" src={item} />
      ))}
    </>
  );
};
