import Subsection from "../Utilities/Subsection"
import { format } from "date-fns";


const Educationprev = ({ educationItem }) => {
  const fromFormat = educationItem.from? format(new Date(educationItem.from), 'MMM yyyy'): educationItem.from;
  const toFormat = educationItem.to? format(new Date(educationItem.to), 'MMM yyyy'): educationItem.to;
  return (
    <div className ='EducationPreviewContainer'>
      <Subsection 
        title={`${educationItem.universityName}, ${educationItem.city}`}
      >
        <p> {educationItem.degree}</p>
        <p> {educationItem.subject}</p>
      </Subsection>
      <p>{fromFormat} - {toFormat}</p>
    </div>
  )
}

export default Educationprev;