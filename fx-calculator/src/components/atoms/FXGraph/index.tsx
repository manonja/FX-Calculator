import * as React from 'react';

export type FXTimeSeries = Array<{x: Date, y:number}>;

export interface FXHistory {
    timeSeries: FXTimeSeries;
};

export const FXHistoryInit : FXHistory = {
    timeSeries: [{x: new Date("2020-02-15"), y: 10}]
};


