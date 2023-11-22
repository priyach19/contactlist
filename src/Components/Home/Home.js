// show loder when data is loading
import Loader from "../Loader";
// importing all the values from contactAPI
import { useContactValue } from "../../context";
import Style from "./home.module.css"
import { Link } from "react-router-dom";


function Home() {
    // Importing dependencies from the ContactAPI
    const {contactList, isLoading , deleteContact} = useContactValue();

    if(isLoading){
        return <Loader />
    }
    // UI for the Home Page
    return (
        <>
            <div className={Style.addContact}>
                {/* Button to Add the contact */}
                <Link to = 'add'>
                    <button className={Style.addContactButton}>Add To Contact</button>
                </Link>
                <br/>
                <br/>
            </div>
            {/* UI for the contactTable */}
            <div className={Style.contactTable}>
                <table className="table">
                    <thead>
                        {/* Table */}
                        <tr className={Style.tableHead}>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {contactList.map((contact, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>
                                    <Link to= {`edit/${contact.id}`}>
                                        <button className={Style.editButton}>Edit</button>
                                    </Link>
                                    &nbsp;
                                    <button onClick={()=>deleteContact(contact.id)} className={Style.deleteButton}>
                                        Delete
                                    </button>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    ) 
}

export default Home;