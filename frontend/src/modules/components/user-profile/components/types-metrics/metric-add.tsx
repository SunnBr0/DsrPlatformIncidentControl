import addMetric from "../../../../../assets/addMetric.svg"
import "./metric-add.scss"
import { local } from '../../../../lang/lang';

export const AddMetric = () =>{
    return(
        <article className="metric-add">
            <figure className="metric-add__figure">
                <img src={addMetric} alt="" />
            </figure>
            <p>{local.userProfile.metric.add.title}</p>
            <button className="metric-add__button">{local.userProfile.metric.add.button}</button>
        </article>
    )
}