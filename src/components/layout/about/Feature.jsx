// Feature.js
import React from 'react';
import Image from '../Image';



const Feature = ({ imageLink, title, subtitle }) => (
    <div className='flex   items-center gap-x-5 ml-2 mt-5 sm:max-md:w-[48%]'>
        <Image imageLink={imageLink} className="p-5 border rounded-full shadow-lg" />
        <div>
            <h3 className='font-bebas-regular text-2xl sm:text-30 text-btn-color'>{title}</h3>
            <p className='font-inter-regular text-xs sm:text-xl text-btn-color'>{subtitle}</p>
        </div>
    </div>
);

export default Feature;
