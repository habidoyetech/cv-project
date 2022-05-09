import Subsection from "../Utilities/Subsection"
import { format } from "date-fns";

const Experienceprev = ({ experienceItem }) => {
  const fromFormat = experienceItem.from? format(new Date(experienceItem.from), 'MMM yyyy'): experienceItem.from;
  const toFormat = experienceItem.to? format(new Date(experienceItem.to), 'MMM yyyy'): experienceItem.to
  return (
    <div className ='experiencePreviewContainer'>
      <div>
        <h5>
          {experienceItem.position}, {experienceItem.company}, {experienceItem.city}
        </h5>
      </div>
      <div>
        {fromFormat} - {toFormat}
      </div>
      <div>
        <Subsection>
          {experienceItem.description}
        </Subsection>
      </div>
    </div>
  )
}

export default Experienceprev;