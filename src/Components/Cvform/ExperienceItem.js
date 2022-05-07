import Button from "../Utilities/Button";
import Input from "../Utilities/Input";

const ExperienceItem = ({ id, experienceItem, onChange, onDelete}) => {
  return (
    <div className="experienceInputContainer">
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="position"
        placeholder="Position"
        value={experienceItem.position}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="company"
        placeholder="Company"
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
        type="text"
        name="from"
        placeholder="From"
        value={experienceItem.from}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="To"
        value={experienceItem.to}
      />
      <Button text="Delete" onClick={() => onDelete(id)}></Button>
    </div>
  );
};

export default ExperienceItem;
