import { Link } from "react-router-dom";
import { RestaurantCard } from "../components";

const RestaurantList = ({ restaurants }) => {
  if (restaurants.length === 0) {
    return <h1>No restaurant found</h1>;
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {restaurants.map((restaurant) => (
        <Link
          className="basis-[290px] p-1 mb-2 mob:basis-[290px]"
          to={"/restaurant/" + restaurant.data.id}
          key={restaurant.data.id}
        >
          <RestaurantCard {...restaurant.data} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
