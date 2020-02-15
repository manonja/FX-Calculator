import React from 'react';
import '../../../App.css';
import { Header }  from '../../atoms/Header'
import FXForm from '../../organism/FXForm'
import ResultField from '../../atoms/ResultField'
import { AppState, Action, initialFXState, reducer, ActionType } from '../../../context'
import {getFXUrl} from '../../../api'

const SPA = () => {
  const [ state, dispatch ] = React.useReducer<React.Reducer<AppState, Action>>(reducer, initialFXState);

  return (
    <>
        <Header title="FX-Calculator"/>
        <FXForm  state={initialFXState} onSubmit={({from_ccy, to_ccy, amount}) => {
          dispatch({type: ActionType.UPDATE_FORM, payload: { from_ccy, to_ccy, amount }});
          // TODO: refactor fetch
          fetch(getFXUrl(from_ccy, to_ccy))
          .then(res => res.json())
          .then((data) => {
            const fx_rate: number = parseFloat(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
            dispatch({type: ActionType.UPDATE_FX_RATE, payload: {fx_rate}})
          })

          // console.log(from_ccy, to_ccy, amount)
          console.log(state)
          }}>

          </FXForm>
        <ResultField result={state.amount * state.fx_rate}/>

   </>
  );
}

export default SPA;
