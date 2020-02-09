import React from 'react';
import '../../../App.css';
import { Header }  from '../../atoms/Header'
import FXForm from '../../organism/FXForm'
import ResultField from '../../atoms/ResultField'



const SPA = () => {
  return (
      <>
        <Header title="FX-Calculator"/>
        <FXForm  onSubmit={({base, target, amount}) => {console.log(base, target, amount)}}></FXForm>
        {/* <ResultField result={result}/> */}
   </>
  );
}

export default SPA;