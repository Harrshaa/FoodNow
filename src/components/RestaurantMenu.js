import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{

    const {resId} =useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo)
   
    
const cards = resInfo?.data?.cards || [];
    const info = cards.length> 2 ? cards[2]?.card?.card?.info : null;
    const { name, cuisines, costForTwoMessage } = info || {};
    
    const cards1 =resInfo?.data?.cards || [];
    
    const info1 = cards1.length>4 ? cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card : null;
    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const{itemCards} =info1 || [];
    // console.log(itemCards)

    const categories= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return (
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )

    })
    console.log(categories);
   
    return resInfo === null ? (<Shimmer/>) :(
        <div className="text-center">
            <h1 className="font-bold m-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{(cuisines || []).join(", ")} - {costForTwoMessage}</h3>

            {categories.map((categories)=> <RestaurantCategory  key={categories?.card?.card?.title} data={categories?.card?.card}/>
             
            )}
       
        </div>
    )
}

export default RestaurantMenu;
