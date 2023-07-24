import { dummy } from "../assets/img";
import { IMG_CDN_URL } from "../config";

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
        <div className='p-2 m-2 shadow-2xl bg-[#DDF7E3] hover:scale-95 h-full'>
            <img
                src={imgSrc}
                alt="logo"
                className="w-full mob:w-[130px]"
            />
            <h2 className="font-bold text-lg w-3/5 tracking-normal pl-1">{name}</h2>
            <h3 className="text-gray-dark text-xs w-4/5 overflow-hidden ht-[32px] pl-1">{description}</h3>
            <h4 className="text-sm font-medium w-4/5 overflow-hidden h-[20px] pl-1">Price: ₹{price ? price / 100 : 0}</h4>
            <div className="flex justify-end">
                <button
                    className="p-1 border-2 border-black rounded-lg bg-[#DF2E38] hover:bg-gray-500 hover:scale-x-110 text-white"
                    onClick={() => handleRemoveItem(id)}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default FoodItem;