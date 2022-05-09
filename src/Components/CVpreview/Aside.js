import PrevHeader from "./prevHeader";

const Aside = ({personalInfo}) => {

  
  return (
    <aside className="asidepersonalInformation">
      <div>
        <PrevHeader personalInfo={personalInfo}/>
      </div>
      <section>
        <h4>Personal Details</h4>
        <div><p>{personalInfo.address}</p></div>
        <div><p>{personalInfo.city}</p></div>
        <div><p>{personalInfo.country}</p></div>
        <div><p>{personalInfo.phoneNumber}</p></div>
        <div><p>{personalInfo.email}</p></div>
      </section>
      <section>
        <h5>Nationality</h5>
        <p>{personalInfo.nationality}</p>
      </section>
      <section>
        <h5>Date of Birth</h5>
        <p>{personalInfo.date}</p>
      </section>

    </aside>
  )
}

export default Aside;