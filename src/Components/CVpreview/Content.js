import React from "react";
import Educationprev from "./Educationprev";
import Experienceprev from "./Experienceprev";

const Content = ({ personalInfo, experience, education }) => {

  const experienceItems = experience.map((experienceItem) => (
    <Experienceprev key={experienceItem.id} experienceItem={experienceItem} />
  ));

  const educationItems = education.map((educationItem) => (
    <Educationprev key={educationItem.id} educationItem={educationItem} />
  ));
  
  return (
    <div className="contentContainer">
      <section className="professionalSummary">
        <h3 className="professionalSummaryHead">Profile</h3>
        <div>{personalInfo.description}</div>
      </section>
      <section className="experience">
        <h3 className="experienceHead">Employment History</h3>
        {experienceItems}
      </section>
      <section className="education">
        <h3 className="educationHead">Education</h3>
        {educationItems}
      </section>
    </div>
  )

}

export default Content;