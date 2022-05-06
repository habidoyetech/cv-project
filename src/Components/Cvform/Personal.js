import Input from "../Utilities/Input"
import FileInput from "../Utilities/FileInput"
import TextArea from "../Utilities/TextArea"

const Personal = ({personalInfo, onChange}) => {
  return (
    <section className="personalInformationSection">
      <h3 className="personalInformation">Personal Information</h3>
      <div className="personalInformationInputsContainer">
        <Input 
          type='text'
          name="title" 
          placeholder="Wanted Job Title" 
          onChange={(e) => onChange(e)}
          value={personalInfo.title}
        />
        <Input 
          type='text'
          name="firstName" 
          placeholder="First Name" 
          onChange={(e) => onChange(e)}
          value={personalInfo.firstName}
        />
        <Input 
          type='text'
          name="middleName" 
          placeholder="Other Name" 
          onChange={(e) => onChange(e)}
          value={personalInfo.middleName}
        />
        <Input 
          type='text'
          name="lastName" 
          placeholder="Last Name" 
          onChange={(e) => onChange(e)}
          value={personalInfo.lastName}
        />
        <FileInput onChange={(e) => onChange(e)}/>
        <Input 
          type='text'
          name="address" 
          placeholder="Address" 
          onChange={(e) => onChange(e)}
          value={personalInfo.address}
        />
        <Input 
          type='tel'
          name="phoneNumber" 
          placeholder="Phone Number" 
          onChange={(e) => onChange(e)}
          value={personalInfo.phoneNumber}
        />
        <Input 
          type='email'
          name="email" 
          placeholder="Email" 
          onChange={(e) => onChange(e)}
          value={personalInfo.email}
        />
        <Input 
          type='date'
          name="date" 
          placeholder="Date of Birth" 
          onChange={(e) => onChange(e)}
          value={personalInfo.date}
        />
        <TextArea 
          placeholder="Professional Summary"
          name= "description"
          onChange={(e) => onChange(e)}
          value={personalInfo.description}
        />
        
      </div>
    </section>
  )
}

export default Personal