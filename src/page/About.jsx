import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-[#5D9C59] p-6 pt-24 min-h-[500px]">
            <div>
                <h1 className="text-4xl font-bold">About Us</h1>

                <p className="mt-4">Welcome to Food Mania, your go-to destination for delicious food delivered right to your doorstep.
                    We are passionate about connecting food lovers with their favorite meals from the best restaurants in town.</p>

                <p className="mt-4">At Food Mania, we believe that good food should be accessible to everyone, whether you're craving a
                    comforting pizza, a sizzling burger, or a healthy salad. With our user-friendly platform and wide selection
                    of restaurants, you can easily explore various cuisines and discover new flavors.</p>

                <p className="mt-4">What sets us apart is our commitment to quality and convenience. We partner with top-rated
                    restaurants that prioritize taste, freshness, and hygiene. Our dedicated delivery team ensures that your
                    food arrives hot and on time,
                    so you can enjoy a delightful dining experience in the comfort of your home or office.</p>

                <p className="mt-4">Whether you're planning a family dinner, a gathering with friends, or a quick lunch at work,
                    Food Mania has got you covered. With just a few clicks, you can browse menus, place orders, and track deliveries,
                    making your food ordering experience seamless and hassle-free.</p>

                <p className="mt-4">We value your feedback and strive to continuously improve our services.
                    Your satisfaction is our top priority, and we're always here to assist you
                    with any questions or concerns you may have.</p>

                <p className="mt-4">Thank you for choosing Food Mania. Get ready to embark on a culinary journey
                    filled with flavors and excitement!</p>
            </div>

            <Outlet />
        </div>
    );
};

export default About;