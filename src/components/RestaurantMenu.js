import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
    // const [resInfo,setResInfo] = useState(null);
    const {resId} =useParams();


    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo)
   
    

    // useEffect(()=>{
    //     fetchMenu();

    // },[])
    // const fetchMenu = async()=>{
    //     const data=  await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json);

    // }

    const cards = resInfo?.data?.cards || [];
    const info = cards.length> 2 ? cards[2]?.card?.card?.info : null;
    const { name, cuisines, costForTwoMessage } = info || {};
    
    const cards1 =resInfo?.data?.cards || [];
    
    const info1 = cards1.length>4 ? cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card : null;
   
    const{itemCards} =info1 || [];
    console.log(itemCards)
   
    return resInfo === null ? (<Shimmer/>) :(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{(cuisines || []).join(", ")} - {costForTwoMessage}</h3>
            <ul>
                {(itemCards || []).map( item=>{
                    return <li key={item.card.info.id}>
                        {item.card.info.name} -{"Rs."} {item.card.info.price/100 != null ? item.card.info.price/100: item.card.info.defaultPrice/100}
                        </li>
                })}
              </ul>
        </div>
    )
}

export default RestaurantMenu;
