import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {

    const [isSelect, setIsSelect] = useState(false);

    const handleClick = () => {
        setIsSelect(true);
    };

    return <div className="bg-[#5D9C59] p-6 h-[1000px]">
        {/* <Link
            to='/contact/profile'
            onClick={handleClick}
        >
            <h1 class="text-4xl font-bold">Contact Us!!</h1>
            </Link>
        {isSelect && <Outlet />} */}
        <h1 class="text-4xl font-bold">Contact Us!!</h1>
    </div>;
}

export default Contact;