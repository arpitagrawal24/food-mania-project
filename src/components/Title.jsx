import React from 'react'
import { Logo } from "../assets/img" 
import { Link } from 'react-router-dom'

function Title() {
    return (
        <Link to='/'>
            <div className="hidden md:flex w-full justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer " >
                    <img
                        alt="logo"
                        src={Logo}
                        className="w-14 h-14 min-w-[50px] min-h-[50px] drop-shadow-2xl rounded-full cursor-pointer object-contain"
                    />
                    <p className="text-headingColor md:text-lg lg:text-xl font-bold">Food Maina</p>
                </div>
            </div>
        </Link>
    );
}

export default Title;
