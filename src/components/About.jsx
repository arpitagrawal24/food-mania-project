import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p> Website for ordering food online.</p>
            <Outlet />
        </div>
    );
};

export default About;