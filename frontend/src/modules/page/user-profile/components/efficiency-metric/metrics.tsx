import { AddMetric } from "./types-metrics/metric-add"
import "../../../../../style/page/user-profile/efficiency-metric/metrics.scss"
import { MetricTask } from "./types-metrics/metric-task"
import { MetricNotification } from "./types-metrics/metric-notifications"
import { MetricEfficiency } from "./types-metrics/metric-efficiency"
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