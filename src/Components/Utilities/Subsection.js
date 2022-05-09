

const Subsection = ({ title, children }) => {
  return (
    <section className="subSectionWrapper">
      <h4>{title}</h4>
      {children}
    </section>
  );
};

export default Subsection;