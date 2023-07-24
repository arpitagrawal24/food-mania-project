import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-white">
            <div className="max-w-screen-xl px-4 py-5 mx-auto space-y-7 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex justify-center mt-7 space-x-6">
                    <a
                        href="#"
                        className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Facebook</span>
                        <BsFacebook className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/arpit-agrawal24"
                        target="blank"
                        className="text-gray-400 hover:text-gray-500">
                        <BsLinkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/arpit_agrawal4"
                        target="blank"
                        className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Instagram</span>
                        <BsInstagram className="w-6 h-6" />

                    </a>
                    <a
                        href="https://twitter.com/ArpitAgrawal24"
                        target="blank"
                        className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <BsTwitter className="w-6 h-6" />
                    </a>
                    <a
                        href="#"
                        target="blank"
                        className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">GitHub</span>
                        <BsGithub className="w-6 h-6" />
                    </a>

                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    Copyright © 2023 Food Mania, Inc. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer;