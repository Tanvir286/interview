import React from 'react';
import { FaRegClock } from "react-icons/fa";

const FooterItem = ({ icon: Icon, title, subtitle1, subtitle2, classname }) => {
    return (
        <div className={`flex flex-col items-center mt-8 sm:mt-5  ${classname}`}>
            <Icon className='text-btn-bg text-center mb-5 text-2xl'/>
            <h4 className='font-bebas-regular text-2xl text-white uppercase tracking-wide mb-2'>{title}</h4>
            <p className='text-white-gray font-roboto-regular text-base'>{subtitle1}</p>
            <p className='text-white-gray font-roboto-regular text-base'>{subtitle2}</p>
        </div>
    );
};

export default FooterItem;
