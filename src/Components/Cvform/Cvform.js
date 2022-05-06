import React from 'react';
import Personal from './Personal';

const CvForm = ({
  cv,
  onChangePersonal,
  
}) => {
  return (
    <div className="cvFormContainer">
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal}/>
    </div>
  )
}

export default CvForm;