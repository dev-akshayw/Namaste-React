import restrautList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

export const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants ] = useState(restrautList);


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() =>{
                    let filterList = listOfRestaurants.filter((res) => res.data.avgRating > 4 );
                    setlistOfRestaurants(filterList);
                }}>
                    Top Rated Customers
                </button>
                
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData={restrautList[0]}/> */}
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};
