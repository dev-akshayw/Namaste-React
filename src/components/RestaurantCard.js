import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);

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
            <h4> {loggedInUser} </h4>           
        </div>
    );
};

export const withPromtedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-slate-900 py-1 px-2 text-white top-[0px] left-[0px]">Open</label> 
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;