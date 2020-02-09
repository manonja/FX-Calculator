import React from 'react';
import '../../../App.css';
import { Header }  from '../../atoms/Header'
import FXForm from '../../organism/form'

const SPA = () => {
  return (
      <>
        <Header title="FX-Calculator"/>
        <FXForm  onSubmit={() => {}}></FXForm>
   </>
  );
}

export default SPA;