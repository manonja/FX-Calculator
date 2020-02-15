import React from 'react';
import '../../../App.css';
import { Header }  from '../../atoms/Header'
import FXForm from '../../organism/FXForm'
import ResultField from '../../atoms/ResultField'
import { FXUIState, Action, defaultFXState, reducer, ActionType } from '../../../context'


const SPA = () => {
  const [ state, dispatch ] = React.useReducer<React.Reducer<FXUIState, Action>>(reducer, defaultFXState);

  return (
    <>
        <Header title="FX-Calculator"/>
        <FXForm  state={defaultFXState} onSubmit={({from_ccy, to_ccy, amount}) => {
          dispatch({type: ActionType.UPDATE_STATE, payload: { from_ccy, to_ccy, amount, conversion_rate: 1 }});
          // console.log(from_ccy, to_ccy, amount)
          console.log(state)
          }}>

          </FXForm>
        <ResultField result={state.amount * state.conversion_rate}/>

   </>
  );
}

export default SPA;
