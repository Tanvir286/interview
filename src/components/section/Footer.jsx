import React from 'react';

import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdPhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook} from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import FooterItem from '../layout/Footer/FooterItem';
import SocialIcon from '../layout/Footer/SocialIcon';

const Footer = () => {
    return (
        <div className='lg:py-120  py-10 add'>
            <div className="container">
                {/*=========(Header Start)==========*/}
                <h2 className='font-bebas-regular lg:text-62 text-40 md:text-5xl  px-5 lg:px-0 text-white text-center uppercase'>
                    We’re ready to offer you the best dining experiences
                </h2>
                {/*=========(Header End)==========*/}

                {/*=========(Footer Items Start)==========*/}              
                <div className='sm:flex justify-center  gap-x-22 gap-x-32 mt-12 flex-wrap lg:flex-nowrap lg:max-xl:gap-x-10'>

                    <FooterItem
                        classname="sm:w-48 lg:w-23"
                        icon={FaRegClock}
                        title="Opening Hours"
                        subtitle1="Monday - Sunday"
                        subtitle2="9:00 AM to 11:30 PM"
                    />

                    <FooterItem
                        classname="sm:w-48 lg:w-23"
                        icon={MdPhoneInTalk}
                        title="let's talk"
                        subtitle1="Phone:1-800-222-4545"
                        subtitle2="Fax:1-800-222-4545"
                    />

                    <FooterItem
                        classname="sm:w-48 lg:w-23"
                        icon={MdOutlineMailOutline}
                        title="book a table"
                        subtitle1="Email:demo@website.com"
                        subtitle2="Support:support@website"
                    />

                    <FooterItem
                        classname="sm:w-48 lg:w-23"
                        icon={FiMapPin}
                        title="our address"
                        subtitle1="123 Street, New York City"
                        subtitle2="United States Of America"
                    />

                </div>
                {/*=========(Footer Items End)==========*/}

                {/*=========(Footer Social Icons)==========*/}
                <div className='flex justify-center lg:mt-20 mt-10 sm:gap-x-8 gap-x-5'>
                    <SocialIcon icon={FaFacebook} />
                    <SocialIcon icon={FaSquareXTwitter} />
                    <SocialIcon icon={FaInstagramSquare} />
                    <SocialIcon icon={FaLinkedin} />
                </div>
                {/*=========(Footer Social Icons)==========*/}
                {/*=========(Footer Last Content)==========*/}
               
                <div className='flex justify-center mt-10 items-center '>

                   <FaRegCopyright className='text-white mr-2'/>
                   <span className='font-montserrat-regular text-base sm:text-21 text-white tracking-wide'>2023 <span className='text-btn-bg'>Niomax</span> All Rights Reseved</span>
                </div>
                


            </div>
        </div>
    );
};

export default Footer;
