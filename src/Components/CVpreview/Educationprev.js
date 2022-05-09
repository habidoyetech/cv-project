import Subsection from "../Utilities/Subsection"


const Educationprev = ({ educationItem }) => {
  return (
    <div className ='EducationPreviewContainer'>
      <div>
        {educationItem.from} - {educationItem.to}
      </div>
      <div>
        <Subsection 
          title={`${educationItem.universityName}, ${educationItem.city}`}
        >
          <p>Degree: {educationItem.degree}</p>
          <p>Subject: {educationItem.subject}</p>
        </Subsection>
      </div>
    </div>
  )
}

export default Educationprev;