import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div className="flex flex-col justify-center h-screen items-center  bg-[#5D9C59] ">
            <div>
            </div>
            <div className="flex flex-col font-black text-5xl m-2">
                <h1>Oops!!</h1>
                <h2>Something went wrong!!</h2>
                <h2>{err.status + " : " + err.statusText}</h2>
            </div>
            <button className="p-2 m-4 border-2 border-black rounded-lg bg-[#DF2E38] hover:bg-gray-500 hover:scale-105 text-white">
                <Link to={"/"}>
                    Back to Home Page
                </Link>
            </button>
        </div>
    );
};

export default Error;