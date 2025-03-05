 import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";
 
 const RestaurantMenu = () => { 

    const [restInfo, setRestInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []); 
    console.log(MENU_API + resId);

    const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId );
        const json = await data.json();
        console.log(json);
        setRestInfo(json.data);
    };

    if(restInfo === null) return <Shimmer />

    const {name, cuisines } = restInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    // console.log(itemCards);

    return(
        <div className="menu">
            <h1> {name}</h1> 
            <p> {cuisines.join(", ")} </p>
            <h2> Menu </h2>
            {/* <ul>
                {itemCards.map(item => <li key={item?.card?.info?.id}> {item?.card?.info?.name} - {item?.card?.info?.price/100} </li>  )}
            </ul> */}
        </div>
    );
};

export default RestaurantMenu;