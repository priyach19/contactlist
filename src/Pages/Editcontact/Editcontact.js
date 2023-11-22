import React from "react";
import { useContactValue } from "../../context";
//importing dependencies from dom
import { useNavigate, useParams, Link } from "react-router-dom";
//importing toast for notification
import { toast } from "react-toastify";
// importing styles..
import Style from "./editcontact.module.css";

function Editcontact() {
  // Importing Values from the contact API
  const {
    contactList,
    setContactList,
    nameRef,
    emailRef,
    numberRef,
    handleClear,
  } = useContactValue();

  const navigate = useNavigate();
  // taking the id from the params
  const param = useParams();

  //find current contact present with the id passed in params
  let currentContact = contactList.find(
    (item) => item.id === parseInt(param.id)
  );

  // funciton to handle after submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // assigning the value to the name
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = numberRef.current.value;

    // return the default value
    if (
      name === currentContact.name &&
      email === currentContact.email &&
      phone === currentContact.phone
    ) {
      return toast.error("Please changes the values !");
    }
    // making new array to make the changes
    const updatedContact = {
      ...currentContact,
      name,
      email,
      phone,
    };
    // updating the list
    const updatedList = contactList.map((contact) => {
      if (contact.id === currentContact.id) {
        return updatedContact;
      }
      return contact;
    });

    toast.success("Contact updated");
    setContactList(updatedList);
    // clear all input fields
    handleClear();
    // redirecting back to the homepage
    navigate("/");
  };

  return (
    <div className={Style.container}>
      <h2>Edit Contact </h2>
      <form onSubmit={handleSubmit}>
        {/* if currentContact present then value the default value */}
        <input
          type="text"
          defaultValue={currentContact?.name}
          placeholder="Name"
          ref={nameRef}
        />
        <br />
        <input
          type="email"
          defaultValue={currentContact?.email}
          placeholder="Email"
          ref={emailRef}
        />{" "}
        <br />
        <input
          type="tel"
          defaultValue={currentContact?.phone}
          placeholder="Number"
          ref={numberRef}
        />{" "}
        <br />
        <div className={Style.buttonDiv}>
          <button type="submit" className={Style.updateButton}>
            Update Contact
          </button>
          <Link to="/">
            <button className={Style.cancel}>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Editcontact;
