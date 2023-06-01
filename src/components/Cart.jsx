import FoodItem from "./FoodItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    return (
        <div className="bg-[#5D9C59] p-1">
            <div className="p-2 m-2 flex justify-between">
                <h1 className="text-3xl p-2 m-2 font-black">Cart items - {cartItems.length}</h1>
                <button
                    className="p-2 m-2 border-2 border-black rounded-lg bg-[#DF2E38] hover:bg-gray-500 text-white"
                    onClick={() => handleClearCart()}
                >
                    Clear Cart
                </button>
            </div>
            <div className="p-3 mx-5 flex flex-wrap">
                {cartItems.map((item) => (
                    <FoodItem key={item.id} {...item} handleRemoveItem={handleRemoveItem} />
                ))}
            </div>
        </div>
    )
}

export default Cart;
