import { useEffect, useState } from "react";
import { filterData } from "../utils/helper";
import useRestaurantsList from "../utils/Api/useRestaurantsList";
import { Shimmer, SearchBar, RestaurantList } from "../components";

const Home = () => {

    const allRestaurants = useRestaurantsList();                                // for base variable
    const [searchText, setSearchText] = useState("");                           // search variable
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);         // for apply filter on data and change it

    useEffect(() => {
        if (allRestaurants?.length > 0 && filteredRestaurants.length === 0) {
            setFilteredRestaurants(allRestaurants);
        }
    }, [allRestaurants, filteredRestaurants]);

    const handleSearch = () => {
        const newData = filterData(searchText, allRestaurants);                 // get the filter data for 'filterData' function
        setFilteredRestaurants(newData);                                        // update the data as per the filter result
    };

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    if (!allRestaurants) return null;                                           // if allRestaurants is empty don't render restaurants cards (early return)

    return (
        <div className="p-3 inset-0 pt-24 bg-[#5D9C59]">

            <SearchBar
                searchText={searchText}
                onSearchClick={handleSearch}
                onChange={handleChange}
            />


            {allRestaurants?.length === 0 ? (
                <Shimmer />
            ) : (
                <RestaurantList restaurants={filteredRestaurants} />
            )}
        </div>
    );
}

export default Home;
