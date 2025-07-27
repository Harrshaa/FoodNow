import { useEffect,useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body=()=>{

    const [restaurantList, setRestaurantList] = useState([]);
    const [searchtext,setSearchtext]=useState("");
    const [filteredList,setFilteredList]=useState([]);

    useEffect(() => {

  
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5366218&lng=78.4844811&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurantList(restaurants);
      setFilteredList(restaurants)
    };

    //Conditional Rendering
    return restaurantList.length === 0 ?  (<Shimmer/>):
      (
        
        <div className="body">
            <div className="filter">

              <div className="search">
                <input className="search-box" type="text" value={searchtext}
                onChange={(e)=>{
                  setSearchtext(e.target.value);
                }}
                ></input>
                <button onClick={()=>{
                  setFilteredList(restaurantList.filter((item)=>{
                    return item.info.name.toLowerCase().includes(searchtext.toLowerCase())

                  }))

                }}>Search</button>
              </div>


              <button className="filter-btn" onClick={()=>{
                const filtered= restaurantList.filter((item)=>{
                  return item.info.avgRating>4.5

                }
              )
            
              setRestaurantList(filtered);
           
              }}>Filter best Restaurant</button>
            </div>
         
            <div className="res-container">
            {filteredList.map((item, index) => {
          if (!item.info?.cloudinaryImageId) return null;
          return <RestaurantCard key={index} resData={item.info} />;
        })}



            </div>
      
        </div>
    )
}

export default Body;