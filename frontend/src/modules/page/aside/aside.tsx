import '../../../style/page/aside/aside.scss';
import user1 from '../../../assets/aside/user1.svg';
import user2 from '../../../assets/aside/user2.svg';
import help from '../../../assets/aside/help.svg';
export const Aside = () =>{
    return (
        <aside className="aside">
            <section className="aside__section">
                <figure className="aside__icon">
                    <img src={user1} alt="" />
                </figure>
                <figure className="aside__icon">
                    <img src={user2} alt="" />
                </figure>
                <figure className="aside__help">
                    <img src={help} alt="" />
                </figure>
            </section>
        </aside>
    )
}