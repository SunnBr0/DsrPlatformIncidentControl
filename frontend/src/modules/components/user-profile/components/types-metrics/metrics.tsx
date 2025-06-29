import { AddMetric } from "./metric-add"
import "./metrics.scss"
import { MetricTask } from "./metric-task"
import { MetricNotification } from "./metric-notifications"
import { MetricEfficiency } from "./metric-efficiency"
export const Metrics = () =>{
    return(
        <section className="metrics">
            <MetricTask/>
            <MetricNotification/>
            <MetricEfficiency/>
            <AddMetric/>
        </section>
    )
}