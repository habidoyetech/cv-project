import React from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';
import Button from '../Utilities/Button';

const CvForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onPrint,
  onReset
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
      <>
        <Button text="Generate PDF" onClick={onPrint} primary></Button>
        <Button text="Reset" onClick={onReset} red></Button>
      </>
    </div>
  )
}

export default CvForm;