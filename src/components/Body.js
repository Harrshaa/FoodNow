import { useEffect,useState,useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{

    const [restaurantList, setRestaurantList] = useState([]);
    const [searchtext,setSearchtext]=useState("");
    const [filteredList,setFilteredList]=useState([]);
    const {setUserName,loggedInUser} =useContext(UserContext)

    console.log(restaurantList);

    useEffect(() => {

  
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5366218&lng=78.4844811&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurantList(restaurants);
      setFilteredList(restaurants)
    };
    const onlineStatus=useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like Offline</h1>

    //Conditional Rendering
    return restaurantList.length === 0 ?  (<Shimmer/>):
      (
        
        <div className="body">
            <div className="filter flex">

              <div className="search m-4 p-4">
                <input className="border border-solid border-black rounded-lg" type="text" value={searchtext}
                onChange={(e)=>{
                  setSearchtext(e.target.value);
                }}
                ></input>
                <button className="px-4 py-2 mx-4 bg-pink-50 rounded-lg" onClick={()=>{
                  setFilteredList(restaurantList.filter((item)=>{
                    return item.info.name.toLowerCase().includes(searchtext.toLowerCase())

                  }))

                }}>Search</button>
              </div>

              <div className="m-4 p-4">
              <button className="px-4 py-2 mx-4 bg-pink-50 rounded-lg" onClick={()=>{
                const filtered= restaurantList.filter((item)=>{
                  return item.info.avgRating>4.5

                }
              )
            
              setRestaurantList(filtered);
           
              }}>Filter best Restaurant</button>

                
              </div>


           

           {/* <input onChange={(e)=>
            setUserName(e.target.value)


           }/> */}

            </div>

           


          


            <div className="res-container flex flex-wrap">
            {filteredList.map((item) => {
            
          // if (!item.info?.cloudinaryImageId) return null;
          return  <Link key={item.info.id}  to={"/restaurants/" + item?.info?.id }><RestaurantCard resData={item.info} /></Link>
        })}



            </div>
      
        </div>
    )
}

export default Body;