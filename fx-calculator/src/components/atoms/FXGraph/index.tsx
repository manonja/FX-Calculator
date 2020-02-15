import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { Chart } from 'chart.js';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

export type FXTimeSeries = Array<{ x: number; t: number }>;

export interface FXHistory {
    timeSeries: FXTimeSeries;
    timeSeriesLoaded: boolean;
}

export const FXHistoryInit: FXHistory = {
    timeSeries: [{ x: moment('2020-02-15').unix(), t: 10 }],
    timeSeriesLoaded: false,
};

export const FXChart: FunctionComponent<FXHistory> = ({ timeSeries, timeSeriesLoaded }) => {
    if (timeSeriesLoaded) {
        const data = {
            datasets: [
                {
                    label: 'TEST',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                    data: timeSeries,
                    type: 'line',
                    pointRadius: 0,
                    fill: false,
                    lineTension: 0,
                    borderWidth: 2,
                },
            ],
        };
        return (
            <div className="FXGraph">
                <div>
                    <Line data={data} />
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};
