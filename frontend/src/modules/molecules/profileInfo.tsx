import { IconFigure } from '../atoms/iconFigure';
import { TitleText } from '../atoms/titleText';
import { local } from '../lang/lang';
type TProfileInfo = {
  src: string;
};
export const ProfileInfo = ({ src }: TProfileInfo) => {
  return (
    <>
      <IconFigure figureClassName="profile__figure" src={src} />
      <TitleText
        className={"profile__title"}
        header={local.userProfile.fullName}
        title={local.userProfile.profession}
        placeWork={local.userProfile.placeWork}
      />
    </>
  );
};
