

// Kendo react graphs 

//or

//progress Teleric


import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
} from "@progress/kendo-react-charts";
import { COLORS } from "./constants";

export const series = [
    {
        exercise_name: "Bench",
        weight: [135, 130, 120, 135, 145,160],
        color: COLORS.total,
    },
    // {
    //     name: "Pending",
    //     data: [12, 6, 15],
    //     color: COLORS.pending,
    // },
    // {
    //     name: "Fulfilled",
    //     data: [7, 3, 5],
    //     color: COLORS.accepted,
    // },
];

const dates = ["January", "February", "March", "April", "May", "June"];

const LineChart = props => {
    return (
        <Chart pannable zoomable style={{ height: 350 }}>
            <ChartTitle text="Application status - last 6 months" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartValueAxis>
                <ChartValueAxisItem title={{ text: "Weight" }} min={0} max={500} />
            </ChartValueAxis>
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={dates} />
            </ChartCategoryAxis>
            <ChartSeries>
                {series.map((item, idx) => (
                    <ChartSeriesItem
                        key={idx}
                        type="line"
                        tooltip={{ visible: true }}
                        data={item.weight}
                        name={item.exercise_name}
                    />
                ))}

            </ChartSeries>
        </Chart>
    );
};

export default LineChart;