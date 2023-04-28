import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";


const RestaurantMenu = () => {

    const { resId } = useParams();
    const restaurant = useRestaurant(resId);

    return (!restaurant) ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <div>
                <h1>{restaurant?.cards[0]?.card?.card?.info?.name} </h1>
                <h2>Restaurent id : {resId}</h2>
                <img src={IMG_CDN_URL + restaurant.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
                        .map((items, index) =>
                        (
                            items?.card?.card?.title ? (
                                <li key={index}>

                                    <h2>{items?.card?.card?.title}</h2>

                                    {items?.card?.card?.itemCards && (
                                        <ul>
                                            {items.card?.card?.itemCards.map((item, nestedIndex) => (
                                                <li key={item.card.info.id}>{item.card.info.name}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : null
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;