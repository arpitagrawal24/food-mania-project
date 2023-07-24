import { Shimmer } from "../components";
import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/Api/useRestaurantMenu";


const RestaurantMenu = () => {

    const { resId } = useParams();
    const restaurant = useRestaurantMenu(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    return (!restaurant) ? (
        <Shimmer />
    ) : (

        <div className="bg-[#5D9C59] p-1 pt-20 flex flex-wrap ">

            <div className="p-5 m-5 py-5 font-bold text-xl h-[600px] w-[620px]">       {/* Restaurant Details */}

                <h1 className="font-black text-5xl pb-2">{restaurant?.cards[0]?.card?.card?.info?.name} </h1>
                <img
                    className="p-2 my-4 shadow-lg bg-[#DDF7E3] rounded-md"
                    src={IMG_CDN_URL + restaurant.cards[0]?.card?.card?.info?.cloudinaryImageId}
                />
                <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>⭐ {restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>

            </div>

            <div className="h-[600px] w-[800px] p-5 m-5">                               {/* Restaurant Menu */}
                <h1 className="font-black text-5xl pb-2">Menu</h1>
                <ul className="h-[520px] m-2 p-2 overflow-auto border-2 rounded-xl border-black">
                    {Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
                        .map((items, index) =>
                        (
                            items?.card?.card?.title ? (
                                <li key={index}>

                                    <h2 className="font-bold text-lg">{items?.card?.card?.title}</h2>

                                    {items?.card?.card?.itemCards && (
                                        <ul className="m-1 p-2 list-disc">
                                            {items.card?.card?.itemCards.map((item, nestedIndex) => (
                                                <li
                                                    key={item.card.info.id}
                                                    className="mx-5 p-2"
                                                >
                                                    <div className="flex justify-between">
                                                        <span className="font-semibold">{item.card.info.name}</span>
                                                        <button
                                                            className="p-1 m-2 border-2 rounded-lg border-black hover:bg-[#C7E8CA]"
                                                            onClick={() => addFoodItem(item.card.info)}
                                                        >
                                                            Add
                                                        </button>
                                                    </div>
                                                </li>
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