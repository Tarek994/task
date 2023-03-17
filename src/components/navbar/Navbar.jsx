import "../navbar/Navbar.css";
import { BsTelephoneFill } from "react-icons/bs";

const navbar = () => {
  return (
    <div className="navbar col-12" >
        <div className="main-nav col-12">
            <div className="left-side col-6">
                <h3 className="logo"><img src="" alt=""/></h3>
                <p>The Tenant Protection<br/> Club</p>
            </div>

            <div className="right-side col-6">
                <h3 className="contact"><span><BsTelephoneFill className="smallicon"/></span> 01000 000 000</h3>
                <p className="address">Mon to Fri, 8 a.m. to 6.30 p.m. and Sat, 11 a.m. to 3 p.m</p>
            </div>
        </div>
    </div>
  )
}

export default navbar
