import { local } from '../lang/lang';
export const TitleProfile = () => {
  return (
    <section className="profile__title">
      <h2>{local.userProfile.fullName}</h2>
      <p>{local.userProfile.profession} {local.userProfile.placeWork}</p>
    </section>
  );
};
