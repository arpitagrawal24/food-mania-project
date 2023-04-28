import { useState, useEffect } from "react";
import { FETCH_RESTAURANTS_URL } from "../config";

const useRestaurantsCard = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANTS_URL);
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return restaurants;
};

export default useRestaurantsCard;
