import React from "react";


const PrevHeader = ({ personalInfo }) => {
  const { firstName, lastName, title, middleName } = personalInfo;

  return (
    <header>
      <h3>
        {firstName} {middleName} {lastName}
      </h3>
      
      <p>{title}</p>
      
    </header>
  );
};

export default PrevHeader;