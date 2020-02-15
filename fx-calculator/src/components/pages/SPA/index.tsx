import React from 'react';
import '../../../App.css';
import { Header }  from '../../atoms/Header'
import FXForm from '../../organism/FXForm'
import ResultField from '../../atoms/ResultField'
import { AppState, Action, initialFXState, reducer, ActionType } from '../../../context'
import {getFXUrl, getFXHistoryUrl} from '../../../api'
import { FXTimeSeries, FXChart } from '../../atoms/FXGraph';
import moment from 'moment';

const SPA = () => {
  const [ state, dispatch ] = React.useReducer<React.Reducer<AppState, Action>>(reducer, initialFXState);

  return (
    <>
        <Header title="FX-Calculator"/>
        <FXForm  state={initialFXState} onSubmit={({from_ccy, to_ccy, amount}) => {
          dispatch({type: ActionType.UPDATE_FORM, payload: { from_ccy, to_ccy, amount }});
          // TODO: refactor fetch
          // fetch(getFXUrl(from_ccy, to_ccy))
          // .then(res => res.json())
          // .then((data) => {
          //   const fx_rate: number = parseFloat(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
          //   dispatch({type: ActionType.UPDATE_FX_RATE, payload: {fx_rate}})
          // })
          
          // TODO: refactor fetch
          const reduced: any = fetch(getFXHistoryUrl(from_ccy, to_ccy))
          .then(res => res.json())
          .then((data) => {
            const ts : FXTimeSeries = []
            const fxData = data["Time Series FX (Daily)"]
            Object.keys(fxData).map((key: any) => ts.push({t: moment(key).unix(), x: fxData[key]["4. close"]}))
            const timeSeries = ts.slice(0, 30)
            dispatch({type: ActionType.UPDATE_FX_HISTORY, payload: {timeSeries}})
          })

          }}>

          </FXForm>
        <ResultField result={state.amount * state.fx_rate}/>
        <FXChart timeSeries={state.timeSeries} timeSeriesLoaded={state.timeSeriesLoaded} />
   </>
  );
}

export default SPA;
