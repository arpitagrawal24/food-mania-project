import { TiTick } from "react-icons/ti";
import { useEffect } from 'react'

function PopUp({ close }) {

    useEffect(() => {
        // Set a timer to close the pop-up after 3000 milliseconds (3 seconds)
        const timer = setTimeout(() => {
            close();
        }, 3000);

        // Prevent scrolling on the page while the pop-up is displayed
        document.body.style.overflow = 'hidden';

        // Clean up the timer and restore scrolling when the component is unmounted
        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-baseline  justify-end z-50">
            <div className="bg-white mt-24 m-4 p-5 rounded-lg shadow-lg flex items-center justify-center">
                <p >Message sent successfully! </p>
                <button
                    className="mx-2 bg-blue-500 rounded hover:bg-blue-600"
                    onClick={close}
                >
                    <TiTick className="text-white w-6 h-6" />
                </button>
            </div>
        </div>
    )
}

export default PopUp;
