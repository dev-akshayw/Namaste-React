import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,cloudinaryImageId,deliveryTime} = resData?.info;
    return (
        <div className="res-card break-words" >
            <img 
              className=" object-cover h-40 w-full"  
              alt="res-log"
              src={ CDN_URL+cloudinaryImageId }
           />
            <h3>{name}</h3>
            <h3>{cuisines.join(",")}</h3>  
            <h3>{avgRating} Stars</h3>   
            <h3>{deliveryTime}</h3>              
        </div>
    );
};

export default RestaurantCard;