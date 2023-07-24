import { useState, useEffect } from "react";
import { FETCH_RESTAURANTS_URL, apidata } from "../../config";

const useRestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();                          // API call is made only once
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(FETCH_RESTAURANTS_URL);
      const json = await data.json();
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.error("Error fetching data from the api:", error);
      setRestaurants(apidata[0].data?.cards[2]?.data?.data?.cards);
    }
  }

  return restaurants;
};

export default useRestaurantsList;