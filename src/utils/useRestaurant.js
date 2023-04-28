import { useState, useEffect } from "react";
import { FETCH_MENU_URL1, FETCH_MENU_URL2 } from "../config";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL1 + resId + FETCH_MENU_URL2);
    const json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurant;
