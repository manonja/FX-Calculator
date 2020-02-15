import React from 'react';
import '../../../App.css';
import { Header }  from '../../atoms/Header'
import FXForm from '../../organism/FXForm'
import ResultField from '../../atoms/ResultField'
import { AppState, Action, initialFXState, reducer, ActionType } from '../../../context'


const SPA = () => {
  const [ state, dispatch ] = React.useReducer<React.Reducer<AppState, Action>>(reducer, initialFXState);

  return (
    <>
        <Header title="FX-Calculator"/>
        <FXForm  state={initialFXState} onSubmit={({from_ccy, to_ccy, amount}) => {
          dispatch({type: ActionType.UPDATE_FORM, payload: { from_ccy, to_ccy, amount }});
          // console.log(from_ccy, to_ccy, amount)
          console.log(state)
          }}>

          </FXForm>
        <ResultField result={state.amount * state.fx_rate}/>

   </>
  );
}

export default SPA;
