import React from 'react';
import Logo from '../assets/img/main-logo.svg';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const navigate = useNavigate();

    const handleDivClick = () => {
        navigate('/udash');
    };
    return (
        <div className="flex justify-between items-center p-2 relative">
            <div className="z-10">
                <img src={Logo} alt="Logo" className="h-28 w-60" />
            </div>
            <div className="flex-1 flex items-end justify-end font-bold text-2xl text-white pr-5">
                <div className="font-comic-sans mx-4 cursor-pointer">What we do</div>
                <div className="font-comic-sans mx-4 cursor-pointer">Innovation</div>
                <div className="font-comic-sans mx-4 cursor-pointer">About Us</div>
                <div className="font-comic-sans mx-4 cursor-pointer" onClick={handleDivClick}>Login/Register</div>
            </div>
        </div>
    );
};

export default NavigationBar;
