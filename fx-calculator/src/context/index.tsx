import * as React from 'react';

export enum ActionType { START_APP, UPDATE_STATE };

export interface FXUIState  {
    from_ccy: string,
    to_ccy: string,
    amount: number,
    conversion_rate: number
};

export const defaultFXState: FXUIState = {
    from_ccy: 'EUR',
    to_ccy: 'GBP',
    amount: 10,
    conversion_rate: 0
  };


export type Action =
  { type: ActionType.START_APP } |
  { type: ActionType.UPDATE_STATE, payload: FXUIState } 
  ;

interface FXUI extends FXUIState {
    updateState: (from: string, to: string, amount: number) => void;
}

export const reducer = (state: FXUIState, action: Action ) : FXUIState => {
    switch (action.type) {
        case ActionType.START_APP:
            return {...state, from_ccy: defaultFXState.from_ccy, to_ccy: defaultFXState.to_ccy, 
                amount: defaultFXState.amount};

        case ActionType.UPDATE_STATE:
            return {...state, from_ccy: action.payload.from_ccy, to_ccy: action.payload.to_ccy, 
                amount: action.payload.amount, conversion_rate: 1.1 };
                
        // TODO: add remaining actions

        default:
            return state
    }
};

// export const initialFXUI = (): FXUI => {
//     const [FXUIState, dispatch ] = React.useReducer<React.Reducer<FXUIState, Action>>(reducer, defaultFXState);
//     return {
//         updateFromCcy: (from: string): void => dispatch({...FXUIState, from: from, type: ActionType.UPDATE_FROM_CURRENCY }),
//         // updateToCcy: (to: string): void => dispatch({...FXUIState, to: to, type: ActionType.UPDATE_TO_CURRENCY }),
//         // updateAmount: (amount: number): void => dispatch({...FXUIState, amount: amount, type: ActionType.UPDATE_AMOUNT })
//     };
// };

// const ctxt = React.createContext<FXUI | null>(null);

// export const AppContextProvider = ctxt.Provider;
  
// export const AppContextConsumer = ctxt.Consumer;

// export const AppContext = ctxt;

// export const contextFxUI = React.createContext<FXUI | null>(null);
