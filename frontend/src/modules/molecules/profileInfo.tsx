import { IconFigure } from '../atoms/iconFigure';
import { TitleProfile } from '../atoms/titleProfile';
import { local } from '../lang/lang';
type TProfileInfo = {
  src: string;
};
export const ProfileInfo = ({ src }: TProfileInfo) => {
  return (
    <>
      <IconFigure figureClassName="profile__figure" src={src} />
      <TitleProfile
        className={"profile__title"}
        header={local.userProfile.fullName}
        title={local.userProfile.profession}
        placeWork={local.userProfile.placeWork}
      />
    </>
  );
};
