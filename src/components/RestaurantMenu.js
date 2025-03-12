import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

 
 const RestaurantMenu = () => { 

    const { resId } = useParams();

    const restInfo = useRestaurantMenu(resId);

    if(restInfo === null) return <Shimmer />

    const {name, cuisines } = restInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    // console.log(itemCards);

    return(
        <div className="menu">
            <h1> {name}</h1> 
            <p> {cuisines.join(", ")} </p>
            <h2> Menu </h2>
            <ul>
                {itemCards.map(item => <li key={item?.card?.info?.id}> {item?.card?.info?.name} - {item?.card?.info?.price/100} </li>  )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;