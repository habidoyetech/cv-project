import Button from "../Utilities/Button";
import Input from "../Utilities/Input";
import TextArea from "../Utilities/TextArea";

const ExperienceItem = ({ id, experienceItem, onChange, onDelete}) => {
  return (
    <div className="experienceInputContainer">
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="position"
        placeholder="Job Title"
        value={experienceItem.position}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="company"
        placeholder="Employer"
        value={experienceItem.company}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City"
        value={experienceItem.city}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="date"
        name="from"
        placeholder="From"
        value={experienceItem.from}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="date"
        name="to"
        placeholder="To"
        value={experienceItem.to}
      />
      <TextArea
        placeholder="Job Description"
        name= "description"
        onChange={(e) => onChange(e, id)}
        value={experienceItem.description}
      />
      <Button text="Delete" onClick={() => onDelete(id)}></Button>
    </div>
  );
};

export default ExperienceItem;
