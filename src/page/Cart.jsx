import { FoodItem } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useEffect } from "react";
import { setLoginStatus } from "../utils/loginSlice";
import { useNavigate } from "react-router-dom";


const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector(store => store.cart.items);
    const isLoggedIN = useSelector((store) => store.loginStatus.isLoggedIn);

    useEffect(() => {
        if (!isLoggedIN) {
            navigate("/login");
        }
    }, []);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    return (
        <div className="p-3 inset-0 pt-24 ">

            <div className="p-2 m-2 flex justify-between">
                <h1 className="text-3xl p-2 m-2 font-black">Cart items - {cartItems.length}</h1>
                <button
                    className="p-2 m-2 border-2 border-black rounded-lg bg-[#DF2E38] hover:bg-gray-500 hover:scale-105 text-white"
                    onClick={() => handleClearCart()}
                >
                    Clear Cart
                </button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center ">
                {cartItems.map((item) => {
                    return (
                        <div className="basis-[290px] p-1 mb-2 mob:basis-[290px]">
                            <FoodItem key={item.id} {...item} handleRemoveItem={handleRemoveItem} className />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Cart;
