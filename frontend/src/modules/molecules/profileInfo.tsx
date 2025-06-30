import { IconFigure } from '../atoms/iconFigure';
import { TitleProfile } from '../atoms/titleProfile';
type TProfileInfo = {
  src: string;
};
export const ProfileInfo = ({ src }: TProfileInfo) => {
  return (
    <>
      <IconFigure figureClassName="profile__figure" src={src} />
      <TitleProfile />
    </>
  );
};
