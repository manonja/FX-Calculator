import React, { FunctionComponent } from 'react'; // importing FunctionComponent

interface Props {
  result: number
}

const ResultField: FunctionComponent<Props> = ({ result }) => 
  <h3 style={{textAlign:'center'}}>
    { result }
  </h3>

export default ResultField;


