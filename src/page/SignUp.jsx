import { useState, useEffect } from 'react'
import { signup_img } from '../assets/img';
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../config';

const SignUp = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const auth = useSelector((store) => store.loginStatus.isLoggedIn);

    useEffect(() => {
        if (auth) {
            navigate("/");
        }
    }, []);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            if(!name || !email || !password || !confirmPass){
                alert("Please fill all the fields");
            }

            if (password === confirmPass) {
                const response = await fetch(`${SERVER_URL}signup`, {
                    method: "POST",
                    body: JSON.stringify({ name, email, password }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                console.log(responseData);

                // localStorage.setItem("user", JSON.stringify(responseData.userData));
                navigate("/login");

            }
            else {
                alert("Password do not match");
            }
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    }

    return (
        <div className="bg-[#5D9C59] pt-28 pb-20 lg:py-[120px] z-10">

            <div className="flex flex-wrap lg:justify-center mx-4">

                <div className="w-full lg:w-1/2 xl:w-6/12 px-2 flex flex-col items-center justify-center">    {/* Contact bar */}
                    <div className="max-w-[570px] mb-12 lg:mb-0 flex flex-col items-center justify-center">
                        <h2 className="text-dark text-center mb-6 uppercase font-bold text-[32px] 
                            sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                            Sign Up
                        </h2>
                        <img
                            src={signup_img}
                            alt="Contact image"
                            className="mb-3 w-96 rounded-lg flex justify-center mx-auto"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 xl:w-5/12 px-4">    {/* Contact form */}
                    <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                        <form >
                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-lg py-3 px-[14px] text-body-color text-base border border-black 
                                    outline-none focus-visible:shadow-none focus:border-primary transition hover:bg-gray-300"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-lg py-3 px-[14px] text-body-color text-base border border-black 
                                    outline-none focus-visible:shadow-none focus:border-primary transition hover:bg-gray-300"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full rounded-lg py-3 px-[14px] text-body-color text-base border border-black 
                                    outline-none focus-visible:shadow-none focus:border-primary transition hover:bg-gray-300"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    value={confirmPass}
                                    onChange={(e) => setConfirmPass(e.target.value)}
                                    className="w-full rounded-lg py-3 px-[14px] text-body-color text-base border border-black 
                                    outline-none focus-visible:shadow-none focus:border-primary transition hover:bg-gray-300"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="w-full bg-blue-800 text-white bg-primary rounded-lg border border-primary p-3 transition hover:bg-opacity-90"
                                >
                                    Create Account
                                </button>
                            </div>
                            <div>
                                <p className='m-3'>
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="text-blue-800"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp
