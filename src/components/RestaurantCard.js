const RestaurantCard=(props)=>{
    console.log(props)
    return(
        <div className="res-card">
        <img className="food-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ props.resData.cloudinaryImageId} />
        
        <h3>{props.resData.name}</h3>
        <h4>{props.resData.cuisines} </h4>
        <h4>{props.resData.avgRating}</h4>
     

        </div>
    )
    
}

export default RestaurantCard;