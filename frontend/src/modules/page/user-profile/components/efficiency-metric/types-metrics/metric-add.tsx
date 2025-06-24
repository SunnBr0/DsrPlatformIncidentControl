import addMetric from "../../../../../../assets/addMetric.svg"
import "../../../../../../style/page/user-profile/efficiency-metric/types-metrics/metric-add.scss"
export const AddMetric = () =>{
    return(
        <article className="metric-add">
            <figure className="metric-add__figure">
                <img src={addMetric} alt="" />
            </figure>
            <p>Добавить метрики эффективности</p>
            <button className="metric-add__button">Добавить</button>
        </article>
    )
}