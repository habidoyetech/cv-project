import Button from "../Utilities/Button";
import Input from "../Utilities/Input";

const EducationItem = ({ id, educationItem, onChange, onDelete }) => {
  return (
    <div className="educationInputContainer">
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="universityName"
        placeholder="University name"
        value={educationItem.universityName}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City"
        value={educationItem.city}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="degree"
        placeholder="Degree"
        value={educationItem.degree}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="subject"
        placeholder="Subject"
        value={educationItem.subject}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="From"
        value={educationItem.from}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="To"
        value={educationItem.to}
      />
      <Button text="Delete" onClick={() => onDelete(id)}></Button>
    </div>
  );
};

export default EducationItem;