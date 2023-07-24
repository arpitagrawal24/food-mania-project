import { Logo } from "../assets/img"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const MobileNav = ({ isOpen, setIsOpen, }) => {

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex flex-col bg-cardOverlay backdrop-blur-sm items-start justify-start gap-16 w-screen h-screen  overflow-y-hidden  z-50 overflow-hidden ">

            <div className="flex items-center justify-between w-screen h-24  px-10">

                <div className="relative flex items-center justify-center text-textColor">                      {/* Cart */}

                    <Link
                        onClick={() => setIsOpen(!isOpen)}
                        to={'/cart'}
                    >
                        <FaShoppingCart className="text-4xl cursor-pointer" />
                        {cartItems && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#DF2E38] bg-opacity-95 flex items-center justify-center">
                                <p className="text-sm text-white font-semibold">
                                    {cartItems.length}
                                </p>
                            </div>
                        )}
                    </Link>

                </div>

                <div className="relative flex items-center justify-center text-textColor" onClick={() => setIsOpen(!isOpen)}>       {/* Cross  */}

                    <MdOutlineRestaurantMenu className="text-headingColor text-4xl" />

                </div>

            </div>

            <div className={`flex items-center justify-center w-full h-72 gap-10 flex-col`}>                                        {/* Nav bar option */}

                <Link onClick={() => setIsOpen(!isOpen)} to={'/'} className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
                    Home
                </Link>

                <Link onClick={() => setIsOpen(!isOpen)} to={'/instamart'} className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
                    Instamart
                </Link>

                <Link onClick={() => setIsOpen(!isOpen)} to={'/about'} className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
                    About Us
                </Link>

                <Link onClick={() => setIsOpen(!isOpen)} to={'/contact'} className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
                    Contact Us
                </Link>


            </div>

            <Link                                                                                                                   // Logo
                to={"/"}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center  justify-center w-full"
            >
                <div className="flex items-center gap-2 cursor-pointer">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-16 object-cover rounded-full"
                    />
                    <p className="text-headingColor text-3xl font-bold">Food Mania</p>
                </div>

            </Link>

        </div>
    )
}

export default MobileNav
