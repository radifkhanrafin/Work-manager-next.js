import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";


import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="w-[95%] mx-auto px-5">
                <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Site Name */}
                    <div className="text-lg font-bold">YourSite</div>

                    {/* Nav Links */}
                    <ul className="flex space-x-6">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>

                    {/* Social Icons */}
                    <div className="flex space-x-4 text-xl">
                        <a href="#"><FaFacebook className="hover:text-blue-500" /></a>
                        <a href="#"><FaTwitter className="hover:text-sky-400" /></a>
                        <a href="#"><FaGithub className="hover:text-gray-400" /></a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm mt-6 text-gray-400">
                    &copy; {new Date().getFullYear()} YourSite. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
