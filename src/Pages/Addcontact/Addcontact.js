import React from "react";
//importing dependencies needed
import { useContactValue } from "../../context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Style from "./addcontact.module.css"

function Addcontact() {
  // Importing all the dependencies from the contextAPI
  const {
    contactList,
    setContactList,
    nameRef,
    emailRef,
    numberRef,
    handleClear,
  } = useContactValue();

  // used to navigate
  const navigate = useNavigate();

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // assigning values to the form as Refs..
    const name = numberRef.current.value;

    const email = emailRef.current.value;
    
    const number = numberRef.current.value;

    //checking if number present or not
    const checkNumber=contactList.find(contact=>contact.number===parseInt(numberRef) && number)
    if(checkNumber){
        return toast.warning("Data not Changed !");
    }
    // Pushing new data into the array of contacts
    if (!nameRef || !emailRef || !numberRef) {
      return toast("All fields are required");
    } 

      const newContactList = [...contactList];
        newContactList.push({
            id: contactList[contactList.length - 1].id + 1,
            name ,
            email ,
            phone : number
        });
       
      setContactList(newContactList);
      toast.success("New Contact added !");
      navigate('/');
      //clear all fields
      handleClear()
    
  };

  return (
    <div className={Style.container}>
      <h1>Add To Contact</h1>
      {/* Form to add contacts */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} required /> <br />
        <input type="email" placeholder="Email" ref={emailRef} required />{" "}
        <br />
        <input type="tel" placeholder="Number" ref={numberRef} required />{" "}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Addcontact;
