import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurantCard=(props)=>{

    const data= useContext(UserContext);
    const {loggedInUser} = data;
  
    return(
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img className="food-image rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ props.resData.cloudinaryImageId} />
        {/* <h4>User: {loggedInUser}</h4> */}
        <h3 className="font-bold py-2 text-lg">{props.resData.name}</h3>
        <h4>{props.resData.cuisines.join(", ")} </h4>
        <h4>{props.resData.avgRating}</h4>
        <h4>{props.resData.costForTwo}</h4>
        <h4>{props.resData.sla.deliveryTime} mins</h4>
       
     

        </div>
    )
    
}

export default RestaurantCard;