import React from 'react';
import Personal from './Personal';
import Experience from './Experience';

const CvForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience
}) => {
  return (
    <div className="cvFormContainer">
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal}/>
      <Experience
        experience={cv.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
    </div>
  )
}

export default CvForm;