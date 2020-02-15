import React, { FunctionComponent } from 'react'; // importing FunctionComponent

interface Props {
  result: number,
  to_ccy: string
}

function ccySymbol(ccy: string): string {
  switch (ccy) {
    case 'USD':
      return '$'
    case 'EUR':
      return '€'
    case 'GBP':
      return '£'
    default:
      return ccy
  }
}

const ResultField: FunctionComponent<Props> = ({ result, to_ccy }) => {
  // TODO left align currency, right align value
  // TODO round output
  return (
  <h3 style={{textAlign:'center'}}>
    {ccySymbol(to_ccy) + " " + result }
  </h3>)
}

export default ResultField;


