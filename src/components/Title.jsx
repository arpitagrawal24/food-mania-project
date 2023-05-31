import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/img/logo.jpg"


function Title() {
    return (
        <div>
            <Link to='/'>
                <img
                    className="h-28 p-2 rounded-r-full"
                    alt="logo"
                    src={Logo} />
            </Link>
        </div>
    );
}

export default Title;
