import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

    // not render compponent (early return)
    if (!allRestaurants) return null;
 
    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <div className="bg-[#5D9C59] p-1">
            
            <div className="rounded-md w-80 mx-4 my-4 bg-[#C7E8CA]">           {/* Search bar */}
                <input
                    type="text"
                    className="focus:bg-blue-100 p-2 m-2 rounded-md"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="p-2 m-2 bg-[#DF2E38] hover:bg-gray-500 text-white rounded-md"
                    onClick={() => {

                        const newData = filterData(searchText, allRestaurants); // get the filter data for 'filterData' function 
                        setFilteredRestaurants(newData); // update the data as per the filter resu lt

                    }}>Search</button>
            </div>

            <div className='flex flex-wrap p-4 m-2'>           {/* Display bar */}

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
        </div>
    );
}

export default Body;