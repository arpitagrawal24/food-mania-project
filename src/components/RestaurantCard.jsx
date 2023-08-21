import { dummy } from "../assets/img"
import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
    name,
    areaName,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId
}) => {
    const imgSrc = cloudinaryImageId ? IMG_CDN_URL + cloudinaryImageId : dummy;
    return (
        <div className='p-2 m-2 shadow-2xl bg-[#DDF7E3] overflow-hidden hover:scale-105 h-full rounded-lg'>
            <img
                src={imgSrc}
                alt="logo"
                className="w-full mob:w-[130px] rounded-md" />

            <h2 className="font-bold text-lg w-3/5 tracking-normal pl-1">{name.toUpperCase()}</h2>

            <h4 className="text-gray-dark text-xs w-4/5 overflow-hidden ht-[32px] pl-1">{cuisines.join(", ")}</h4>

            <h4 className="text-sm font-medium w-4/5 overflow-hidden h-[20px] pl-1">{areaName}</h4>
            <div className="flex mt-4 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold mob:flex-col mob:items-start">
                <div className="text-gray-dark text-xs w-4/5 overflow-hidden ht-[32px] ">
                    <h6 className="bg-green-600 w-fit px-[0.125px]">⭐{avgRating}</h6>
                </div>
                <h6 className="text-gray-dark text-xs w-4/5 overflow-hidden">{sla.lastMileTravelString}</h6>
                <h6 className="text-gray-dark text-xs w-4/5 overflow-hidden">{costForTwo}</h6>
            </div>
        </div>
    )
}

export default RestaurantCard;