const RestaurantCategory=(props)=>{
 
    const {title} = props.data
    
    return  (
        <div>
            {/* Header */}
           <span>{title}</span>
           <span className="mx-2">⬇️</span>

            {/* Accordian Body */}
        </div>
    )

}

export default RestaurantCategory;