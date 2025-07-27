import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderComponent=()=>{
    let btnName = "Login";
    const [btn,setBtn]=useState("Login")
    return(
        <div className="header">
            <div >
                <img className="logo-container" src={LOGO_URL} />
            </div>
            <div className="nav-item">
                <ul className="navs">
                    <li className="items">Home</li>
                    <li className="items">About us</li>
                    <li className="items">Contact</li>
                    <li className="items">Cart</li>
                    <button className="login-btn" onClick={()=>{
                        setBtn("Logout")
                    }
                    }>{btn}</button>

                
                </ul>
                
            </div>
            
        </div>
     
    )
}

export default HeaderComponent;