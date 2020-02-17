import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import moment from 'moment';
import { Line } from 'react-chartjs-2';

export type FXTimeSeries = Array<{ t: number; y: number }>;

export interface FXHistory {
    timeSeries: FXTimeSeries;
    timeSeriesLoaded: boolean;
}

export const FXHistoryInit: FXHistory = {
    timeSeries: [{ t: 10, y: moment('2020-02-15').valueOf() }],
    timeSeriesLoaded: false,
};

interface FXChartProps extends FXHistory {
    ccyPair: string
};

export const FXChart: FunctionComponent<FXChartProps> = ({ timeSeries, timeSeriesLoaded, ccyPair }) => {
    if (timeSeriesLoaded) {
        const data: object = {
            datasets: [
                {
                    label: ccyPair,
                    data: timeSeries,
                    type: 'line',
                    fill: false,
                    lineTension: 0.1, // see https://raw.githubusercontent.com/jerairrest/react-chartjs-2/master/example/src/components/randomizedLine.js
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    
                },
            ],
        };

        const options: object = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series' ,
                    offset: true,
                    ticks: {
                        major: {
                            enabled: true,
                            fontStyle: 'bold'
                        },
                        source: 'data',
                        autoSkip: true,
                        autoSkipPadding: 75,
                        maxRotation: 0,
                        sampleSize: 100
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Closing price ($)'
                    }
                }]
            }
        }

        return (
            <div className="FXGraph" style={{display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '20px'}}>
                <div style={{height:'400px', width: '900px'}}>
                    <Line data={data} options={options}/>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};
