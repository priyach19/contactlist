//importing hooks needed 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function Error(){
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(() => {
           navigate("/");
            }, 3000);
    },[navigate])
    
    return(
        <>
        <h1>Something went wrong!!! </h1>
        <br/>
        <p>Redirecting to homepage......</p>
        </>
    )
}