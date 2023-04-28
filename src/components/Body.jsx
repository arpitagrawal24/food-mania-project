import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import RestaurantCard from "./RestaurantCard";
import useRestaurantsCard from "../utils/useRestaurantsCard";


const Body = () => {

    const [searchText, setSearchText] = useState(""); // search variable
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); // for apply filter on data and change it

    const allRestaurants = useRestaurantsCard();        // for base variable
    
    useEffect(() => {
        if (allRestaurants.length > 0 && filteredRestaurants.length === 0) {
            setFilteredRestaurants(allRestaurants);
        }
    }, [allRestaurants, filteredRestaurants]);
    
    // const isOnline = useOnline();
    
    // if(!isOnline) {
    //     return <h1>🔴Offline!! Check your internet connection.🔴</h1>
    // }

    // not render compponent (early return)
    if (!allRestaurants) return null;



    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">           {/* Search bar */}
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {

                        const newData = filterData(searchText, allRestaurants); // get the filter data for 'filterData' function 
                        setFilteredRestaurants(newData); // update the data as per the filter resu lt

                    }}>Search</button>
            </div>

            <div className='restaurant-list'>           {/* Display bar */}

                {filteredRestaurants.length === 0 ? <h1>No restaurant found</h1> : filteredRestaurants.map((restaurant) => {
                    return (
                        <Link
                            to={"/restaurant/" + restaurant.data.id}
                            key={restaurant.data.id}>
                            < RestaurantCard {...restaurant.data} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

export default Body;