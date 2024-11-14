import React from 'react';
import Button from '../Button';

const Bannerleft = () => {
    return (
        <>
                 {/* button tag */}
                <Button text="EXPLORE MENU" className='cursor-pointer mt-24' />
                <p className='font-roboto-regular text-2xl text-white max-w-560 mt-350'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                {/* heading tag */}
                <h1 className='text-120 leading-none font-bebas-regular text-white max-w-960 absolute top-[350px] left-0 z-20 bg-none'
                style={{
                    backgroundImage: 'linear-gradient(to right, transparent 35%, #BD1F17)',
                }}
                >
                Taste the authentic Saudi cuisine
                </h1>
                
        </>
    );
};

export default Bannerleft;