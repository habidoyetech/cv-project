import React, {useState} from 'react';
import CvForm from './Cvform/Cvform';
import emptyCV from './Utilities/emptyCv';

const Main = () => {


  const [cv, setCv] = useState(emptyCV)
  return(
    <main className="cvMainContainer">
      <CvForm cv={cv}/>

    </main>
  )
}

export default Main