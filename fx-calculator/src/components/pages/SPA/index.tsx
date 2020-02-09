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
        <FXForm  onSubmit={({from_currency, to_currency, amount}) => {
          dispatch({type: ActionType.UPDATE_STATE, payload: { from_currency, to_currency, amount, conversion_rate: 1 }});
          // console.log(from_currency, to_currency, amount)
          console.log(state)
          }}>

          </FXForm>
        <ResultField result={state.amount * state.conversion_rate}/>

   </>
  );
}

export default SPA;