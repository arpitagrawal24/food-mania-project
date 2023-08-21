import { useState, useEffect } from "react";
import { FETCH_MENU_URL1, FETCH_MENU_URL2 } from "../../config";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(FETCH_MENU_URL1 + resId + FETCH_MENU_URL2);
      const json = await data.json();
      setRestaurant(json.data);
    } catch (error) {
      console.error("Error fetching data from the proxy server:", error);
      // setRestaurant(menudata[0].data);
    }
  }

  return restaurant;
};

export default useRestaurantMenu;
