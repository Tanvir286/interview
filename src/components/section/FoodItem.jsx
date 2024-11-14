import React, { useRef ,useEffect, useState } from 'react';
import { GiPlainSquare } from "react-icons/gi";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import FoodItemContent from '../../../public/assets/about/itemOne.png';
import Image from '../layout/Image';

// Slick Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Subheader from './../layout/Subheader';

const FoodItem = () => {


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const sliderRef = useRef(null);
    const secondSliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const goToPreviousSlide = () => {
        sliderRef.current.slickPrev();
    };


    /*==========UseEffect===========*/
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    /*==========UseEffect===========*/

    return (
        <div className='py-6  lg:py-120 sm:py-14 md:py-20 bg-food-item-bg-color'>
            <div className='max-w-container mx-auto'>

                {/* Food item header part */}
                <div className='flex justify-between items-center px-5 '>
                    {/* Left part */}
                    <Subheader
                        icon={GiPlainSquare}
                        subtitle1="Crispy, Every Bite Taste"
                        subtitle2="POPULAR FOOD ITEMS"
                    />
                   
                    {/* Left part */}
                    {/* Right part with navigation buttons */}
                    {windowWidth > 640 && (
                        <div className='flex items-center gap-x-5'>
                            <RiArrowLeftSLine onClick={() => goToPreviousSlide(firstSliderRef)} className='w-9 h-9 bg-white border rounded-full cursor-pointer' />
                            <RiArrowRightSLine onClick={() => goToNextSlide(firstSliderRef)} className='w-9 h-9 bg-white border rounded-full cursor-pointer' />
                        </div>
                    )}
                    {/* Right part with navigation buttons */}
                </div>
                {/* Food item header part */}

                {/* Food item carousel */}
                <Slider ref={sliderRef} {...settings} className='-ml-6 px-4'>

                    {/* Item start  */}
                    <div className='px-4 py-4 mx-2 '>
                        <Image imageLink={FoodItemContent} className="w-full" />
                        <h2 className='font-bebas-regular text-xl uppercase bg-white text-center'>vegetables burger</h2>
                        <p className='font-inter-regular text-base bg-white text-center pb-5'>Barbecue Italian cuisine pizza</p>
                    </div>
                    {/* Item end  */}
                    {/* Item start  */}
                    <div className='px-4 py-4 mx-2 '>
                        <Image imageLink={FoodItemContent} className="w-full" />
                        <h2 className='font-bebas-regular text-xl uppercase bg-white text-center'>vegetables burger</h2>
                        <p className='font-inter-regular text-base bg-white text-center pb-5'>Barbecue Italian cuisine pizza</p>
                    </div>
                    {/* Item end  */}
                    {/* Item start  */}
                    <div className='px-4 py-4 mx-2 '>
                        <Image imageLink={FoodItemContent} className="w-full" />
                        <h2 className='font-bebas-regular text-xl uppercase bg-white text-center'>vegetables burger</h2>
                        <p className='font-inter-regular text-base bg-white text-center pb-5'>Barbecue Italian cuisine pizza</p>
                    </div>
                    {/* Item end  */}
                    {/* Item start  */}
                    <div className='px-4 py-4 mx-2 '>
                        <Image imageLink={FoodItemContent} className="w-full" />
                        <h2 className='font-bebas-regular text-xl uppercase bg-white text-center'>vegetables burger</h2>
                        <p className='font-inter-regular text-base bg-white text-center pb-5'>Barbecue Italian cuisine pizza</p>
                    </div>
                    {/* Item end  */}
                    {/* Item start  */}
                    <div className='px-4 py-4 mx-2 '>
                        <Image imageLink={FoodItemContent} className="w-full" />
                        <h2 className='font-bebas-regular text-xl uppercase bg-white text-center'>vegetables burger</h2>
                        <p className='font-inter-regular text-base bg-white text-center pb-5'>Barbecue Italian cuisine pizza</p>
                    </div>
                    {/* Item end  */}
                    {/* Item start  */}
                    <div className='px-4 py-4 mx-2 '>
                        <Image imageLink={FoodItemContent} className="w-full" />
                        <h2 className='font-bebas-regular text-xl uppercase bg-white text-center'>vegetables burger</h2>
                        <p className='font-inter-regular text-base bg-white text-center pb-5'>Barbecue Italian cuisine pizza</p>
                    </div>
                    {/* Item end  */}
                  
                </Slider>
                {/* Food item carousel */}


                {windowWidth < 640 && (
                    <div className='flex justify-center items-center gap-x-5 mt-5'>
                        <RiArrowLeftSLine onClick={() => goToPreviousSlide(secondSliderRef)} className='w-9 h-9 bg-white border rounded-full cursor-pointer' />
                        <RiArrowRightSLine onClick={() => goToNextSlide(secondSliderRef)} className='w-9 h-9 bg-white border rounded-full cursor-pointer' />
                    </div>
                )}
               

            </div>
        </div>
    );
};

export default FoodItem;
