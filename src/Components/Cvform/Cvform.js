import React from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

const CvForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation
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
      <Education
        education={cv.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
    </div>
  )
}

export default CvForm;