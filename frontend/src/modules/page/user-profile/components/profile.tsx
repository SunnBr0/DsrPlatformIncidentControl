import user1 from '../../../../assets/aside/user1.svg';

export const Profile = () => {
  return (
    <section className="profile__people">
      <figure className="profile__figure">
        <img src={user1} alt="" />
      </figure>
      <section className="profile__title">
        <h2>Иван Егорович Сергеев</h2>
        <p>Технолог КВР-342</p>
      </section>
      <button className="profile__button">Заступить на смену</button>
    </section>
  );
};
