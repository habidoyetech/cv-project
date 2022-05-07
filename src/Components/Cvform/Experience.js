import ExperienceItem from "./ExperienceItem";
import Button from "../Utilities/Button";

const Experience = ({ experience, onChange, onAdd, onDelete }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));

  return (
    <section className="employmentExperienceSection">
      <h3 className="employmentExperienceHead">Employment History</h3>
      {experienceItems}
      <Button text="Add" onClick={onAdd}></Button>
    </section>
  );
};

export default Experience;