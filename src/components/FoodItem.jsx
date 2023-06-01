import { IMG_CDN_URL } from "../config";
import dummy from "../assets/img/dummy.jpg"

const FoodItem = ({
    id,
    name,
    description,
    price,
    imageId,
    handleRemoveItem
}) => {
    const imgSrc = imageId ? IMG_CDN_URL + imageId : dummy;
    return (
        <div className='w-56 p-2 m-2 shadow-2xl bg-[#DDF7E3]'>
            <img
                src={imgSrc}
                alt="logo" />
            <h2 className="font-bold text-lg">{name}</h2>
            <h3>{description}</h3>
            <h4 className="font-bold">Price: ₹{price / 100}</h4>
            <div className="flex justify-end">
                <button
                    className="p-2 border-2 border-black rounded-lg bg-[#DF2E38] hover:bg-gray-500 text-white"
                    onClick={() => handleRemoveItem(id)}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default FoodItem;