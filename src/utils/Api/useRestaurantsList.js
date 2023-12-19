import { useState, useEffect } from "react";
import { FETCH_RESTAURANTS_URL } from "../../config";

const useRestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);

  
  useEffect(() => {
    console.log(FETCH_RESTAURANTS_URL);
    getRestaurants(); // API call is made only once
  }, []);

  async function getRestaurants() {
    try {
      // const data = await fetch(FETCH_RESTAURANTS_URL);
      // const json = await data.json();
      // setRestaurants(
      //   json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
      // );
      setRestaurants(FETCH_RESTAURANTS_URL)
      console.log(data);
    } catch (error) {
      console.error("Error fetching data from the api:", error);
      // setRestaurants(apidata);
    }
  }

  return restaurants;
};

export default useRestaurantsList;
