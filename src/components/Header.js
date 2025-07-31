import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import About from "./About";

const HeaderComponent=()=>{
    console.log("Header Called");
    
    const [btn,setBtn]=useState("Login")
    useEffect(()=>{
        console.log("use effect called");

    },)
    return(
        <div className="header">
            <div >
                <img className="logo-container" src={LOGO_URL} />
            </div>
            <div className="nav-item">
                <ul className="navs">
                    <li className="items"><Link to="/">Home</Link></li>
                    <li className="items"><Link to="/about">About</Link></li>
                    <li className="items"><Link to="/contact">Contact</Link></li>
                    <li className="items">Cart</li>
                    <button className="login-btn" onClick={()=>{
                        if(btn === "login") setBtn("logout");
                        else setBtn("login");
                    }
                    }>{btn}</button>

                
                </ul>
                
            </div>
            
        </div>
     
    )
}

export default HeaderComponent;