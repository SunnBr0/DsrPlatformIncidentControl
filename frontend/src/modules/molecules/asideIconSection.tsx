import { ButtonIcon } from '../atoms/button/buttonIcon';
type TAsideIconSection = {
  icons: string[];
};
export const AsideIconSection = ({ icons }: TAsideIconSection) => {
  return (
    <>
      {icons.map((item,index) => (
        <ButtonIcon key={`${item}-${index}`} buttonClassName="aside__button-icon" figureClassName="aside__icon" src={item} />
      ))}
    </>
  );
};
