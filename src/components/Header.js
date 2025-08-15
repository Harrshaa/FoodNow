import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import About from "./About";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const HeaderComponent=()=>{
    const isonline = useOnlineStatus();
    console.log("Header Called");

    const data = useContext(UserContext);
    console.log(data);
    const {loggedInUser} =data;
    
    const [btn,setBtn]=useState("Login")
    useEffect(()=>{
        console.log("use effect called");

    },)
    return(
        <div className="flex justify-between bg-pink-50 shadow-md">
            <div >
                <img className="w-24" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">{isonline? "online" : "offline" }</li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>


                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" onClick={()=>{
                        if(btn === "login") setBtn("logout");
                        else setBtn("login");
                    }
                    }>{btn}</button>
                    <li className="px-4">{loggedInUser}</li>

                
                </ul>
                
            </div>
            
        </div>
     
    )
}

export default HeaderComponent;