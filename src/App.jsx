import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Logo from "./../public/assets/Logo.png";

import Navbar from './components/section/Navbar';
import About from './components/section/About';
import FoodItem from './components/section/FoodItem';
import Booktable from './components/section/Booktable';
import Slider from './components/section/Slider';
import Footer from './components/section/Footer';

import Flex from './components/layout/Flex';
import Image from './components/layout/Image';
import Button from './components/layout/Button';

const App = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [navbarOpen, setNavbarOpen] = useState(false);

    // Toggle function for mobile navbar
    const shownavbar = () => setNavbarOpen((prev) => !prev);

    /* UseEffect part start */
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    /* UseEffect part end */

    return (
        <div>
            {/* Sticky Navbar with z-index and background effect */}

            <div className="sticky top-0 z-50 w-full bg-banner bg-no-repeat bg-center bg-cover">
                <div className="">
                    <div className="bg-transparent  shadow-md">
                        <div className="max-w-container mx-auto">
                            {/* Navbar part Start */}
                            <Flex className="items-center justify-between py-4 px-3 xl:px-0">
                                {/* Logo */}
                                <Image imageLink={Logo} className="lg:w-10 w-[150px]" />

                                {/* Navbar Links for desktop */}
                                {windowWidth > 768 && (
                                    <>
                                        <nav className="pl-9 xl:pl-14 w-60 xl:w-75 flex gap-x-5 xl:gap-x-10 text-15 text-white font-raleway-medium cursor-pointer">
                                            {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map((item) => (
                                                <a key={item}>{item}</a>
                                            ))}
                                        </nav>
                                        {/* Button */}
                                        <Button text="BOOK A TABLE" className="" />
                                    </>
                                )}

                                {/* Hamburger Icon for mobile */}
                                {windowWidth < 768 && (
                                    <FaBars className="text-xl text-white mr-5 cursor-pointer" onClick={shownavbar} />
                                )}
                            </Flex>
                            {/* Navbar part End */}

                            {/* Mobile Navbar Links */}
                            {windowWidth <= 768 && (
                                <nav
                                    className={`absolute top-0 right-0 py-10 pl-5 z-20 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl shadow-xl border border-white/30 flex flex-col items-start w-[250px] h-[700px] gap-y-5 text-15 text-white font-raleway-medium cursor-pointer transition-all duration-500 ease-in-out transform ${
                                        navbarOpen ? 'right-0 opacity-100' : '-right-[300px] opacity-0'
                                    }`}
                                >
                                    {/* Logo and Close Icon */}
                                    <div className="flex items-center justify-between w-full pr-5">
                                        <Image imageLink={Logo} className="w-24" />
                                        <IoMdClose className="text-2xl text-white cursor-pointer" onClick={shownavbar} />
                                    </div>

                                    {/* Navbar Links */}
                                    {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map((item) => (
                                        <a key={item} className="hover:text-gray-300 transition-colors duration-200">{item}</a>
                                    ))}
                                </nav>
                            )}
                            {/* Mobile Navbar Links */}
                            <div className=''>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sticky Navbar with z-index and background effect */}

            <About/>
        </div>
    );
};

export default App;
