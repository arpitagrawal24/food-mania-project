import { Link } from "react-router-dom";
import { RestaurantCard } from "../components";

const RestaurantList = ({ restaurants }) => {

  return restaurants.length === 0 ? (
    <div className="m-2 p-2 flex justify-center text-2xl font-extrabold h-72">
      <div className="flex flex-col text-center">
        <h1>No restaurant available now!! </h1>
        <h1> Please try again later.</h1>
      </div>
    </div>
  ) : (
    <div className="flex flex-wrap gap-2 justify-center">
      {restaurants.map((restaurant) => (
        <Link
          className="basis-[290px] p-1 mb-2 mob:basis-[290px]"
          to={"/restaurant/" + restaurant.info.id}
          key={restaurant.info.id}

        >
          <RestaurantCard {...restaurant.info} />

        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
