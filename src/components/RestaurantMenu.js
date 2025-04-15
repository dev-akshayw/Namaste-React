import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

 
 const RestaurantMenu = () => { 

    const { resId } = useParams();

    const restInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if(restInfo === null) return <Shimmer />

    const {name, cuisines } = restInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    // console.log("card is" , restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories =  restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter (
        (c) => 
            c.card?.card?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);

    return(
        <>
            <div className="menu text-center pb-4">
                <h1 className="font-semibold text-3xl pb-3"> {name}</h1> 
                <p className="pb-2 font-medium text-xl"> {cuisines.join(", ")} </p>
                <h2 className=" text-2xl font-semibold"> Menu </h2>
                {/* <ul>
                    {itemCards.map(item => <li key={item?.card?.info?.id}> {item?.card?.info?.name} - {item?.card?.info?.price/100} </li>  )}
                </ul> */} 
            </div>
            {categories.map((category, index) => (
                <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card} 
                    showItems={index === showIndex && true}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </>
    );
};

export default RestaurantMenu;