// TextInput.js
import React from 'react';

const TextInput = ({ placeholder, type = "text", className = "" }) => {
    return (
        <div className="flex flex-col">
            <input
                type={type}
                className={`bg-transparent text-white sm:max-md:w-[280px]   md:w-[302px] mb-4 sm:mb-0 focus:outline-none border p-2 placeholder:text-base placeholder:font-roboto-regular ${className}`}
                placeholder={type === "date" ? "" : placeholder} 
            />
        </div>
    );
};

export default TextInput;
