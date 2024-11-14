import React, { useRef, useEffect, useState } from 'react';
import { GiPlainSquare } from "react-icons/gi";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import sliderOne from "../../../public/assets/slider/sliderOne.png";
import sliderTwo from "../../../public/assets/slider/sliderTwo.png";
import quote from "../../../public/assets/slider/Quote.png";
import quoteTwo from "../../../public/assets/slider/QuoteSecond.png";
import sidebarOne from "../../../public/assets/slider/12.png";
import sidebarTwo from "../../../public/assets/slider/13.png";


import Image from '../layout/Image';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Subheader from '../layout/Subheader';

const Slider = () => {
    const firstSliderRef = useRef(null);
    const secondSliderRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const goToNextSlide = (sliderRef) => {
        sliderRef.current.slickNext();
    };

    const goToPreviousSlide = (sliderRef) => {
        sliderRef.current.slickPrev();
    };

    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='py-14 md:py-120 px-5 relative'>


            <div className="container">
                {/* Header Part Start */}
                <div className='flex justify-between items-center'>
                    <Subheader
                        icon={GiPlainSquare}
                        subtitle1="Crispy, Every Bite Taste"
                        subtitle2="POPULAR FOOD ITEMS"
                        classname=""
                    />

                    {/* First Navigation Buttons Start */}
                    {windowWidth > 640 && (
                        <div className='flex items-center gap-x-5'>
                            <RiArrowLeftSLine onClick={() => goToPreviousSlide(firstSliderRef)} className='w-9 h-9 bg-white border rounded-full cursor-pointer' />
                            <RiArrowRightSLine onClick={() => goToNextSlide(firstSliderRef)} className='w-9 h-9 bg-white border rounded-full cursor-pointer' />
                        </div>
                    )}
                    {/* First Navigation Buttons End */}
                </div>
                {/* Header Part End */}

                {/* First SlickSlider Start */}
                { windowWidth > 640 &&
                    <SlickSlider ref={firstSliderRef} {...sliderSettings} className="lg:mt-10">
                    <div>
                        <Image imageLink={quote} className="w-full h-[560px] bg-cover" />
                    </div>
                    <div>
                        <Image imageLink={quote} className="w-full h-[560px]" />
                    </div>
                    <div>
                        <Image imageLink={quote} className="w-full h-[560px]" />
                    </div>    
                </SlickSlider>
                }
                {/* First SlickSlider End */}
               

                {/* Second SlickSlider Start */}
                { windowWidth < 640 &&
                    <SlickSlider ref={secondSliderRef} {...sliderSettings} className="mt-5">
                    <div>
                        <Image imageLink={quoteTwo} className="w-full h-[560px] bg-cover" />
                    </div>
                    <div>
                        <Image imageLink={quoteTwo} className="w-full h-[560px]" />
                    </div>
                    <div>
                        <Image imageLink={quoteTwo} className="w-full h-[560px]" />
                    </div>    
                </SlickSlider>
                }
                {/* Second SlickSlider End */}
               

                {/* Mobile Navigation Buttons */}
                {windowWidth < 640 && (
                    <div className='flex justify-center items-center gap-x-5 mt-5'>
                        <RiArrowLeftSLine onClick={() => goToPreviousSlide(secondSliderRef)} className='w-9 h-9 bg-white border rounded-full cursor-pointer' />
                        <RiArrowRightSLine onClick={() => goToNextSlide(secondSliderRef)} className='w-9 h-9 bg-white border rounded-full cursor-pointer' />
                    </div>
                )}
            </div>
 
            {/* Other Part Start */}
            {windowWidth > 1024 &&
             <div>
                <Image imageLink={sidebarOne} className="absolute right-[1px] top-[385px] -z-20" />
                <Image imageLink={sidebarTwo} className="absolute -left-[141px] top-[185px] -z-20" />
             </div>
            }
            {/* Other Part End */}



        </div>
    );
};

export default Slider;
