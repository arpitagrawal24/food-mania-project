import Title from "./Title";
import MobileNav from "./MobileNav";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { avatar, Logo } from "../assets/img"
import { useState, useContext } from "react";
import UserContext from "../utils/UseContext";
import { FaShoppingCart } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdLogin, MdOutlineMenu } from 'react-icons/md';
import { setLoginStatus } from "../utils/loginSlice";

const Header = () => {


  const dispatch = useDispatch();
  const { user } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  const isLoggedIN = useSelector((store) => store.loginStatus.isLoggedIn);


  const handleLogout = () => {
    localStorage.removeItem('user')
    dispatch(setLoginStatus(false))
  }


  return (

    <header className="w-screen fixed z-50 bg-cardOverlay backdrop-blur-md md:p-3 md:px-4 lg:p-6 lg:px-16 ">

      <div className="hidden md:flex w-full justify-between items-center">                            {/* Nav bar Tablet and Desktop*/}

        <Title />                                                                                     {/* Logo */}

        <div className="flex items-center gap-8">                                                     {/* Nav bar option */}

          <ul className="flex items-center gap-8">

            <li className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-xl ">
              <Link to='/'> Home </Link>
            </li>

            <li className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-xl">
              <Link to='/instamart'> Instamart </Link>
            </li>

            <li className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-xl">
              <Link to='/about'> About Us </Link>
            </li>

            <li className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-xl">
              <Link to='/contact'> Contact Us </Link>
            </li>

          </ul>

          <Link to='/cart' className="relative flex items-center justify-center text-textColor transition-transform transform hover:scale-110 hover:text-5xl"> {/* Cart */}
            <FaShoppingCart className="text-2xl cursor-pointer" />
            {cartItems && (
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#DF2E38] bg-opacity-95 flex items-center justify-center cursor-pointer">
                <p className="text-sm font-semibold">{cartItems.length}</p>
              </div>
            )}
          </Link>


        </div>

        {isLoggedIN ? (                                                                               /* Login button */
          <div className="group flex items-center gap-3 px-3 py-1 rounded-lg transition-transform transform hover:scale-110" onClick={handleLogout}>

            <div className="flex items-center justify-center">

              <img
                src={avatar}
                alt="profile"
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer object-contain"
              />

              <p className="text-headingColor cursor-pointer flex items-center justify-center gap-2">
                <RiArrowDropDownLine />
              </p>

            </div>

            {/* <DropDown user={user} /> */}

          </div>
        ) : (
          <button className="hover:text-xl">
            <Link
              to={"/login"}
              className="flex items-center gap-3 border border-black px-3 py-1 rounded-lg cursor-pointer hover:bg-blue-100"
            >
              <MdLogin />
              <p className="text-headingColor ">Login</p>
            </Link>
          </button>
        )}

      </div>


      <div className="flex md:hidden w-full p-0 items-center justify-between">              {/* Nav bar Mobile */}

        {isOpenMobileNav ? (

          <MobileNav isOpen={isOpenMobileNav} setIsOpen={setIsOpenMobileNav} />

        ) : (
          <div className="p-5 flex items-center justify-between w-full">

            <div className=" flex items-center justify-center" onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}>

              <MdOutlineMenu className="text-headingColor text-4xl" />

            </div>

            <Link to={"/"}>
              <div className="flex items-center gap-2 cursor-pointer transition-transform transform hover:scale-110  hover:text-4xl">

                <img src={Logo} alt="Logo" className="w-14 object-cover rounded-full" />
                <p className="text-headingColor text-xl font-bold">
                  Food Mania
                </p>

              </div>
            </Link>

            {isLoggedIN ? (
              <div className="flex items-center gap-3 px-3 py-1 rounded-lg relative transition-transform transform hover:scale-110" onClick={handleLogout}>

                <div className="group flex items-center justify-center">
                  <img
                    src={avatar}
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer"
                    alt="user-profile"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <p className="text-headingColor cursor-pointer flex items-center justify-center gap-2">
                    <RiArrowDropDownLine />
                  </p>
                  {/* {isOpen && <DropDown user={user} />} */}
                </div>
              </div>
            ) : (
              <button >
                <Link
                  to='/login'
                  className="flex items-center gap-3 border border-black px-3 py-1 rounded-lg cursor-pointer hover:bg-blue-100"
                >
                  <MdLogin className='text-2xl text-headingColor' />
                </Link>
              </button>
            )}
          </div>
        )}
      </div>

    </header>
  );
}

export default Header;