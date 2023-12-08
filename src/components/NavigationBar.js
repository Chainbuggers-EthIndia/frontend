import React from 'react';
import Logo from '../assets/img/main-logo.svg';

const NavigationBar = () => {
    return (
        <div className="flex justify-between items-center p-2 relative">
            <div className="z-10">
                <img src={Logo} alt="Logo" className="h-28 w-60" />
            </div>
            <div className="flex-1 flex items-end justify-end font-bold text-2xl text-white pr-5">
                <div className="font-comic-sans mx-4">What we do</div>
                <div className="font-comic-sans mx-4">Innovation</div>
                <div className="font-comic-sans mx-4">About Us</div>
            </div>
        </div>
    );
};

export default NavigationBar;
