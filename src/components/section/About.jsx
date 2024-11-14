import React, { useState,useEffect } from 'react';
import Aboutpic from "../../../public/assets/about/about.png";
import AboutOne from "../../../public/assets/about/aboutOne.png";
import AboutTwo from "../../../public/assets/about/package.png";
import AboutThree from "../../../public/assets/about/medal.png";
import AboutPosition from "../../../public/assets/about/aboutPosition.png";


import AboutContent from '../layout/about/AboutContent';
import Feature from '../layout/about/Feature';
import Image from '../layout/Image';

const About = () => {
    // State to track active tab
    const [activeTab, setActiveTab] = useState('About');

    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (
  
    <div className="relative">

        {/* container part start */}
        <div className="py-10 lg:py-120 mx-auto max-w-container   lg:max-xl:px-2 ">
            {/* about top part */}
            <div className='lg:flex  gap-x-14 px-5 md:px-0'>
             {/* left part start */}
             <div className='lg:w-1/2 mb-8'>
                {/* Image part */}
                <Image imageLink={Aboutpic} className='w-full h-full object-cover' />
              </div>
             {/* left part end */}
             {/* right part start */}
             <div className='lg:w-1/2'>
                {/*=============(button part start)========================= */}
                <div className='flex gap-x-5 border-b border-about-btn-bg-color'>
                    {['About', 'Experience', 'Contact'].map((tab) => (
                        <a
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`text-sm font-inter-medium cursor-pointer px-3 py-2 
                                ${activeTab === tab ? 'bg-about-btn-bg-color text-white' : 'text-about-btn-color'} `}
                        >
                            {tab}
                        </a>
                    ))}
                </div>
                {/*=============(button part end)========================= */}
                {/*=============(content part start)========================= */}
                <div className=' mt-4'>


                     {activeTab === 'About' && (
                        <AboutContent
                            heading="Exceptional culinary experience and delicious food"
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation."
                            buttonText="About More"
                            phone="+88 3426 739 485"
                            btnclass={windowWidth < 450 ? "w-1/2 px-3 py-3" : ""}
                            iconclass="text-base"
                            phoneclass="text-xs"
                        />
                    )}


                    {activeTab === 'Experience' && (
                        <AboutContent
                            heading="Years of expertise in culinary arts"
                            paragraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            buttonText="Learn More"
                            phone="+88 3426 739 486"
                            btnclass={windowWidth < 450 ? "w-1/2 px-3 py-3" : ""}
                            iconclass="text-base"
                            phoneclass="text-xs"
                        />
                    )}


                    {activeTab === 'Contact' && (
                        <AboutContent
                            heading="Get in touch with us"
                            paragraph="Feel free to reach out for inquiries, reservations, or feedback. Our team is always here to assist you with any information or requests."
                            buttonText="Contact Us"
                            phone="+88 3426 739 487"
                            btnclass={windowWidth < 450 ? "w-1/2 px-3 py-3" : ""}
                            iconclass="text-base"
                            phoneclass="text-xs"
                        />
                    )}
                 </div>
                {/*=============(content part end)========================= */}
             </div>
            {/* right part end */}
            </div>
             {/* about top part */}


             {/* about bottom start */}
             <div className='sm:flex gap-x-20 lg:gap-x-10 xl:gap-x-40 mt-16 px-2 xl:px-0 flex-wrap lg:flex-nowrap'>
                <Feature imageLink={AboutOne} title="FAST DELIVERY" subtitle="Within 30 Minutes" />
                <Feature imageLink={AboutTwo} title="ABSOLUTE DINING" subtitle="Best buffet restaurant " />
                <Feature imageLink={AboutThree} title="PICKUP DELIVERY" subtitle="Grab your food order" />
             </div>
              {/* about bottom end */}   
              
        </div>
        {/* container part end */}
           
        {windowWidth > 1024 &&                    
         <Image  imageLink={AboutPosition} className='object-cover absolute -right-[290px] bottom-20'/>               
        }

    </div>
       


       
    );
};

export default About;
