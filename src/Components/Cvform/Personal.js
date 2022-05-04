import Input from "../Utilities/Input"
import FileInput from "../Utilities/FileInput"
import TextArea from "../Utilities/TextArea"

const Personal = () => {
  return (
    <section className="personalInformationSection">
      <h3 className="personalInformation">Personal Information</h3>
      <div className="personalInformationInputsContainer">
        <Input 
          type='text'
          name="title" 
          placeholder="Wanted Job Title" 
          
          
        />
        <Input 
          type='text'
          name="firstName" 
          placeholder="First Name" 
          
        />
        <Input 
          type='text'
          name="middleName" 
          placeholder="Other Name" 
          
        />
        <Input 
          type='text'
          name="lastName" 
          placeholder="Last Name" 
         
        />
        <FileInput/>
        <Input 
          type='text'
          name="address" 
          placeholder="Address" 
         
        />
        <Input 
          type='tel'
          name="phoneNumber" 
          placeholder="Phone Number" 
         
        />
        <Input 
          type='email'
          name="email" 
          placeholder="Email" 
         
        />
        <TextArea 
          placeholder="Professional Summary"
          name= "description"
        />
        
      </div>
    </section>
  )
}

export default Personal