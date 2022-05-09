import { v4 as uuidv4 } from "uuid";
import emptyAvatar from "../../assests/empty_avatar.png"


const emptyCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    date: "",
    middleName: "",
    country: "",
    city: "",
    nationality: "",
    photo: emptyAvatar,
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      description: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ],
};

export default emptyCV