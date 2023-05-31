import Title from "./Title";
import { Link } from 'react-router-dom'
import useOnline from "../utils/useOnline";
import { useState, useContext } from "react";
import UserContext from "../utils/UseContext";

const Header = () => {

  const [isLoggedIN, SetIsLoogedIN] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-[#C7E8CA] shadow-lg">

      <Title />

      <div className='nav-item'>
        <ul className="flex py-11 mx-4">

          <li className="px-2">
            <Link to='/'>
              Home
            </Link>
          </li>

          <li className="px-2">
            <Link to='/about'>
              About
            </Link>
          </li>

          <li className="px-2">
            <Link to='/contact'>
              Contact
            </Link>
          </li>

          <li className="px-2">
            <Link to='/instamart'>
              Instamart
            </Link>
          </li>

          <li className="px-2">Cart {isOnline ? "✅" : "🔴"}</li>

          <li className="px-2">
            {isLoggedIN ? (
              <button className="font-bold" onClick={() => SetIsLoogedIN(false)}>{user.name}</button>
            ) : (
              <button onClick={() => SetIsLoogedIN(true)}>login</button>
            )}
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Header;