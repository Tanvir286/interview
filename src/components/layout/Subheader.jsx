import React from 'react';

const Subheader = ({ icon: Icon, subtitle1, subtitle2, classname }) => {
  return (
    <div>
      <div className='flex items-center gap-x-2'>
        <Icon className='text-about-btn-bg-color text-center text-8' />
        <p className='font-roboto-bold text-base sm:text-xl text-red'>{subtitle1}</p>
      </div>
      <h1 className={`font-bebas-regular sm:text-62 text-40  text-black ${classname}`}>{subtitle2}</h1>
    </div>
  );
};

export default Subheader;
