import { useState } from "react";
import Logo from "../assets/img/logo.jpg"
import { Link } from 'react-router-dom'
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <Link to='/'>
      <img
        className='logo'
        alt="logo"
        src={Logo} />
    </Link>
  );
}

const Header = () => {

  const [isLoggedIN, SetIsLoogedIN] = useState(false);
  const isOnline = useOnline();

  return (
    <div className='header'>

      <Title />

      <div className='nav-item'>
        <ul>

          <li>
            <Link to='/'>
              Home
            </Link>
          </li>

          <li>
            <Link to='/about'>
              About
            </Link>
          </li>

          <li>
            <Link to='/contact'>
              Contact
            </Link>
          </li>

          <li>
            <Link to='/instamart'>
              Instamart
            </Link>
          </li>

          <li>Cart {isOnline ? "✅" : "🔴"}</li>

          <li>
            {isLoggedIN ? (
              <button onClick={() => SetIsLoogedIN(false)}>logout</button>
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