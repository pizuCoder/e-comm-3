import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "./firebase";

const handleSubmit = (Name, Email, Phone) => {
  const ref = collection(firestore, "contactUs_data"); // Firebase creates this automatically
  let data = {
    Name: Name,
    Email: Email,
    Phone: Phone
  };
  try {
    addDoc(ref, data);
  } catch (err) {
    console.log(err);
  }
};
export default handleSubmit;