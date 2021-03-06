import * as React from 'react';
import {FXFormState} from '../components/organism/FXForm'
import { FXHistory, FXHistoryInit, FXTimeSeries } from '../components/molecules/FXGraph'

export enum ActionType { START_APP, UPDATE_FORM, UPDATE_FX_RATE, UPDATE_FX_HISTORY };

export interface AppState extends FXFormState, FXHistory {
    fx_rate: number
};

export const initialFXState: AppState = {
    from_ccy: 'EUR',
    to_ccy: 'GBP',
    amount: 0,
    fx_rate: 0,
    timeSeries: FXHistoryInit.timeSeries,
    timeSeriesLoaded: FXHistoryInit.timeSeriesLoaded
  };


export type Action =
  { type: ActionType.START_APP } |
  { type: ActionType.UPDATE_FORM, payload: {from_ccy: string, to_ccy: string, amount: number} } |
  { type: ActionType.UPDATE_FX_RATE, payload: {fx_rate: number } } |
  { type: ActionType.UPDATE_FX_HISTORY, payload: {timeSeries: FXTimeSeries } }
  ;


export const reducer = (state: AppState, action: Action ) : AppState => {
    switch (action.type) {
        case ActionType.START_APP:
            return {...state, from_ccy: initialFXState.from_ccy, to_ccy: initialFXState.to_ccy, 
                amount: initialFXState.amount};

        case ActionType.UPDATE_FORM:
            return {...state, from_ccy: action.payload.from_ccy, to_ccy: action.payload.to_ccy, 
                amount: action.payload.amount };
        
        case ActionType.UPDATE_FX_RATE:
            return {...state, fx_rate: action.payload.fx_rate };

        case ActionType.UPDATE_FX_HISTORY:
            return {...state, timeSeries: action.payload.timeSeries, timeSeriesLoaded: true };
                
        default:
            throw new Error();
    }
};


