import { IMG_CDN_URL } from "../config";
import dummy from "../assets/img/dummy.jpg"

const RestaurantCard = ({
    name,
    cuisines,
    lastMileTravelString,
    cloudinaryImageId
}) => {
    const imgSrc = cloudinaryImageId ? IMG_CDN_URL + cloudinaryImageId : dummy;
    return (
        <div className='card '>
            <img
                src={imgSrc}
                alt="logo" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} away</h4>
        </div>
    )
}

export default RestaurantCard;