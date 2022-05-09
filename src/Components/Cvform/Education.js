import EducationItem from "./EducationItem";
import Button from "../Utilities/Button";

const Education = ({ education, onChange, onAdd, onDelete }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onDelete={onDelete}
    ></EducationItem>
  ));

  return (
    <section className="educationSection">
    <h3 className="educationHead">Education</h3>
    {educationItems}
    <Button text="Add" onClick={onAdd}></Button>
  </section>
  );
};

export default Education;