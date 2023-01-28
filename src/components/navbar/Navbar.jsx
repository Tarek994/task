import Navbar from "../navbar/Navbar.css";
import {BsTelephoneFill} from "react-icon"

const navbar = () => {
  return (
    <div className="navbar col-12" >
        <div className="main-nav col-10">
            <div className="left-side col-6">
                <h3 className="logo"> tenant angel</h3>
                <p>The Tenant Protection<br/> Club</p>
            </div>

            <div className="right-side col-6">
                <h3 className="contact"> 030 5557 1887</h3>
                <p>Mon to Fri, 8 a.m. to 6.30 p.m. and Sat, 11 a.m. to 3 p.m</p>
            </div>
        </div>
    </div>
  )
}

export default navbar