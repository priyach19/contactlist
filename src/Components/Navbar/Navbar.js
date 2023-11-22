//import components used in Navbar
import {Link,Outlet} from "react-router-dom"
//importing styles
import Style from "./navbar.module.css"
function Navbar(){
    return (
        <>
        <nav>
            <Link className="link" to="/">
                <h2 className={Style.heading}>
                    Contact List 
                </h2>
                </Link>
        </nav>
        <Outlet/>
        </>
    )
}
export default Navbar;