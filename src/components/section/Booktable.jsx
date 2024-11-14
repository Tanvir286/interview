// Booktable.js
import React from 'react';
import { GiPlainSquare } from "react-icons/gi";
import TextInput from '../layout/Book/TextInput';
import Button from '../layout/Button';
import Subheader from '../layout/Subheader';


const Booktable = () => {
    return (
        <div className='bg-book py-6 md:py-120 bg-no-repeat bg-center bg-cover px-10 xl:px-5'>
            <div className='container  '>
 
        
            <div className='max-w-300 sm:max-w-none mx-auto'>
                
                {/* Title Section */}
                <div className=''>                  
                    {/* subheader title start */}
                    <Subheader
                       icon={GiPlainSquare}
                       subtitle1="Book Now"
                       subtitle2="book your table"
                       classname="text-white"
                    />
                    {/* subheader title end*/}
                    <p className='font-roboto-regular text-base text-white max-w-330  sm:max-w-545 leading-6'>
                        Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
                    </p>
                </div>
                 {/* Title Section */}

                
                {/* Input Fields Section */}
                <div className=''>
                    
                        <div className='mt-10 '>
                            <div className='sm:flex gap-8 mx-auto'>
                                <TextInput placeholder="Your Name*" />
                                <TextInput placeholder="Your Email*" />
                            </div>
                            <div className='sm:flex gap-8 sm:mt-5 mx-auto '>
                                <TextInput placeholder="Reservation Date" type="date" />
                                <TextInput placeholder="Total People"  type="number"/>
                            </div>
                            <div>
                            <TextInput placeholder="Message" className='md:w-[635px] pb-[140px] mt-5 sm:max-md:w-[590px]'   />
                            </div>
                        </div>

                </div>

                {/* Input Fields Section */}

                {/* Book Now Button Section */}
                <Button text="BOOK NOW" className='text-base sm:mt-11' />
            
                {/* Book Now Button Section */}
            </div>

                

            </div>
        </div>
    );
};

export default Booktable;
