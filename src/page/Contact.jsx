import { ContactForm, PopUp } from "../components";

import { useState } from "react";
import {contact_img} from "../assets/img";


const Contact = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const closePopUp = () => {
        setSubmitted(false);
    };

    return (
        <div className="bg-[#5D9C59] pt-28 pb-20 lg:py-[120px] z-10">

            <div className="flex flex-wrap lg:justify-center mx-4">

                <div className="w-full lg:w-1/2 xl:w-6/12 px-2 flex flex-col items-center justify-center">    {/* Contact bar */}
                    <div className="max-w-[570px] mb-12 lg:mb-0 flex flex-col items-center justify-center">
                        <h2 className="text-dark text-center mb-6 uppercase font-bold text-[32px] 
                            sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                            Get in touch with us
                        </h2>
                        <img
                            src={contact_img}
                            alt="Contact image"
                            className="mb-3 w-96 rounded-lg flex justify-center mx-auto"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 xl:w-5/12 px-4">    {/* Contact form */}
                    <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                        <ContactForm handleSubmit={handleSubmit} />
                        {submitted && <PopUp close={closePopUp} />}
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Contact;
