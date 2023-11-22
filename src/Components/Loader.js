// importing spinner from library
import { GridLoader } from "react-spinners";


export default function Loader() {

  return (
    // styling the spinner
      <div style={{textAlign:"center",
                    display:"flex", 
                    justifyContent:"space-around",
                    flexDirection:"column",
                    alignItems:"center",
                    marginTop:"15%",
                    zIndex:"999"}}>
        <div>
          {/* show spinner */}
          <GridLoader color="#7064e5" />
          {/* show message below the spinner */}
          <h4>Loading..</h4>
        </div>
      </div>
    )
}