import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants ] = useState([]);

    const [searchText, setSearchText] = useState("");
    const [filterRestaurant, setFilterRestaurant] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // console.log(json);
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // console.log(listOfRestaurants);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
        return (
            <h1> Looks like you are offline, please check your internet connection. </h1>
        );

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">

                <div className="search">
                    <input type="text" placeholder="search" className="search-box" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button onClick={() => {
                        const filterRestaurant = listOfRestaurants.filter((res) =>  
                            res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                        );
                        setFilterRestaurant(filterRestaurant);
                    }}>search</button>
                </div>

                <button className="filter-btn" onClick={() =>{
                    let filterList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3 );
                    setFilterRestaurant(filterList);
                }}>
                    Top Rated Customers
                </button>
                
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData={restrautList[0]}/> */}
                {filterRestaurant.map((restaurant) => (
                    <Link  key={restaurant.info.id}  to={"/restaurants/"+ restaurant.info.id }>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
