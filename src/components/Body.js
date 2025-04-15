import RestaurantCard, {withPromtedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants ] = useState([]);

    const [searchText, setSearchText] = useState("");
    const [filterRestaurant, setFilterRestaurant] = useState("");

    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

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
    console.log(listOfRestaurants);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
        return (
            <h1> Looks like you are offline, please check your internet connection. </h1>
        );

    const {setUserName, loggedInUser } = useContext(UserContext);

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex gap-24 py-8 px-4">

                <div className="search">
                    <input type="text" placeholder="search" className="search-box border" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="bg-orange-400 py-1 px-4" onClick={() => {
                        const filterRestaurant = listOfRestaurants.filter((res) =>  
                            res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                        );
                        setFilterRestaurant(filterRestaurant);
                    }}>search</button>
                </div>

                <button className="bg-orange-400 py-1 px-4" onClick={() =>{
                    let filterList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3 );
                    setFilterRestaurant(filterList);
                }}>
                    Top Rated Customers
                </button>

                <div>
                    <label>User Name</label>
                    <input 
                        className="border p-1  border-black"  
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                
            </div>
            <div className="res-container grid grid-cols-6 gap-8">
                {/* <RestaurantCard resData={restrautList[0]}/> */}
                {filterRestaurant.map((restaurant) => (
                    <Link className="bg-gray-200 p-3 relative "  key={restaurant.info.id}  to={"/restaurants/"+ restaurant.info.id }>
                       
                        {
                            restaurant?.info?.isOpen ? ( 
                                <RestaurantCardPromoted resData={restaurant} /> 
                            ) : (
                                <RestaurantCard resData={restaurant} />
                            ) 
                        }

                    </Link>
                ))}
            </div>
        </div>
    );
};
