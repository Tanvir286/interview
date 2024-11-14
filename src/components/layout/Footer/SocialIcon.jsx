import React from 'react';

const SocialIcon = ({ icon: Icon }) => {
    return (
        <div className='border p-3 rounded-full'>
            <Icon className='text-white lg:text-xl' />
        </div>
    );
};

export default SocialIcon;
