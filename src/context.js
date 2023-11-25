//importing dependencies from react
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

//creating context API
const contactContext = createContext();

//exporting values from this file
export function useContactValue() {
  const value = useContext(contactContext);
  return value;
}

function CustomContext({ children }) {
  //state for storing contacts locally
  const [contactList, setContactList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  //refs for adding and updating  local state of contactlist
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
 

  //fetch data from API and set the state
  const fetchContactList = async () => {
    setIsLoading(true);
    let data = await fetch("https://jsonplaceholder.typicode.com/users/");
    let contact = await data.json();
    setContactList(contact);
    setIsLoading(false);
  };

  // delete the contact from contact list
  const deleteContact = (id) => {
    const index = contactList.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      let newContactList = [...contactList];
      newContactList.splice(index, 1);
      toast.success("Contact Deleted Successfully !");
      setContactList(newContactList);
    }
  };

  // Reset the values
  const handleClear = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    numberRef.current.value = "";
  };

  //on mounting component
  useEffect(() => {
    fetchContactList();
  }, [isLoading]);

  return (
    <contactContext.Provider
      value={{
        contactList,
        setContactList,
        isLoading,
        setIsLoading,
        nameRef,
        emailRef,
        numberRef,
        handleClear,
        deleteContact,
      }}
    >
      {children}
    </contactContext.Provider>
  );
}
export default CustomContext;
