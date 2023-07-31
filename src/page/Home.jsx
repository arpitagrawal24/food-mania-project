import { useEffect, useState } from "react";
import { filterData } from "../utils/helper";
import useRestaurantsList from "../utils/Api/useRestaurantsList";
import { Shimmer, SearchBar, RestaurantList } from "../components";

const Home = () => {

    const allRestaurants = useRestaurantsList();                                // for base variable
    const [searchText, setSearchText] = useState("");                           // search variable
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);         // for apply filter on data and change it
    const [noResultsFound, setNoResultsFound] = useState(false);                // for no results found message

    useEffect(() => {
        if (allRestaurants?.length > 0 && filteredRestaurants.length === 0) {
            setFilteredRestaurants(allRestaurants);
        }
    }, [allRestaurants, filteredRestaurants]);

    const handleSearch = () => {
        const newData = filterData(searchText, allRestaurants);                 // get the filter data for 'filterData' function
        setFilteredRestaurants(newData);                                        // update the data as per the filter result

        if (newData.length === 0) {                                             // Check if any results were found
            setNoResultsFound(true);
        } else {
            setNoResultsFound(false);
        }

    };

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    if (allRestaurants === 0) return null;                                           // if allRestaurants is empty don't render restaurants cards (early return)

    return (
        <div className="p-3 inset-0 pt-24 bg-[#5D9C59]">

            <SearchBar
                searchText={searchText}
                onSearchClick={handleSearch}
                onChange={handleChange}
            />


            {noResultsFound ? (
                <div className="m-2 p-2 flex justify-center text-2xl font-extrabold h-40">
                    <div className="flex flex-col text-center">
                        <h1>No restaurant available now!! </h1>
                        <h1> Please try again later.</h1>
                    </div>
                </div>
            ) : allRestaurants?.length === 0 ? (
                <Shimmer />
            ) : (
                <RestaurantList restaurants={filteredRestaurants} />
            )}
        </div>
    );
}

export default Home;
