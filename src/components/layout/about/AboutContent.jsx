// AboutContent.js
import React from 'react';
import Button from '../Button';
import { FiPhoneCall } from "react-icons/fi";

const AboutContent = ({ heading, paragraph, buttonText, phone, btnclass, iconclass, phoneclass }) => {
    return (
        <div>
            <h1 className='max-w-624 text-40  xl:text-62 font-bebas-regular mt-4 leading-none'>{heading}</h1>
            <p className='font-roboto-regular text-base max-w-624 mt-4 text-about-btn-color leading-6'>{paragraph}</p>
            <div className='flex items-center gap-x-4 sm:gap-x-8 mt-8 lg:max-xl:mt-5'>
                <Button text={buttonText} className={`cursor-pointer ${btnclass}`} />
                <div className='flex gap-x-4 items-center'>
                    <FiPhoneCall className={`text-red sm:text-xl ${iconclass}`} />
                    <p className={`font-roboto-bold sm:text-xl ${phoneclass}`}>{phone}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
