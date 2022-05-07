import React, {useState} from 'react';
import CvForm from './Cvform/Cvform';
import emptyCV from './Utilities/emptyCv';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {


  const [cv, setCv] = useState(emptyCV)

  const handleChangePersonal = (e) => {
    const { name, value} = e.target

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }))
  }

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target

    setCv((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value }
        }
        return experienceItem
      })
      return { ...prevState, experience: [...newExperience] }
    })
  }

  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    }))
  }

  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      )
      return { ...prevState, experience: [...newExperience] }
    })
  }
  console.log(emptyCV.experience)

  return(
    <main className="cvMainContainer">
      <CvForm 
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
      />

    </main>
  )
}

export default Main