import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,cloudinaryImageId,deliveryTime} = resData?.info;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
              className="res-Logo"
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