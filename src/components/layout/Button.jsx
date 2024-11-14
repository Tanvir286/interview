import React from 'react';

const Button = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 lg:px-6  lg:py-3 text-btn-color bg-btn-bg rounded text-xs xl:text-base font-roboto-bold focus:outline-none ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
