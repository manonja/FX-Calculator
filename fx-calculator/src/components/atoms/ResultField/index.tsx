import React, { FunctionComponent } from 'react'; 
import { ccySymbol }  from '../../../utils';

interface Props {
  result: number,
  to_ccy: string
}

const ResultField: FunctionComponent<Props> = ({ result, to_ccy }) => {
  // TODO left align currency, right align value
  // TODO round output
  return (
  <h3 style={{textAlign:'center'}}>
    {`${ccySymbol(to_ccy)} ${result.toFixed(2)}`}
  </h3>)
}

export default ResultField;


