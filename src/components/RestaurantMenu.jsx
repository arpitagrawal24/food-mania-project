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

        <div className="bg-[#5D9C59] p-1  flex flex-wrap ">

             <div className="p-5 m-5 py-5 font-bold text-xl h-[600px] w-[620px]">       {/* Restaurant Details */}

                <h1>{restaurant?.cards[0]?.card?.card?.info?.name} </h1>
                <h2>Restaurent id : {resId}</h2>
                <img className="p-2 my-4 shadow-lg bg-[#DDF7E3]" src={IMG_CDN_URL + restaurant.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>

            </div>

            <div className="h-[600px] w-[800px] p-5 m-5">                               {/* Restaurant Menu */}
                <h1 className="font-black text-5xl">Menu</h1>
                <ul className="h-[520px] m-2 p-2 overflow-auto">
                    {Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
                        .map((items, index) =>
                        (
                            items?.card?.card?.title ? (
                                <li key={index}>

                                    <h2 className="font-bold text-lg">{items?.card?.card?.title}</h2>

                                    {items?.card?.card?.itemCards && (
                                        <ul className="m-1 p-2 list-disc">
                                            {items.card?.card?.itemCards.map((item, nestedIndex) => (
                                                <li key={item.card.info.id} className="mx-5 p-2">{item.card.info.name}</li>
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