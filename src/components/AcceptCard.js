import React from 'react';
import companyBack from '../assets/img/company.svg'
const AcceptCard = () => {

    const handleClick = () => {
        console.log('accepted');
    };
    return (
        <div className="h-[250px] w-52 mx-6 m-2 rounded-lg bg-darkgreen z-2 relative">
            <div className="h-[135px] rounded-t-lg top-0 flex flex-col text-white font-bold text-xl">
                <img src={companyBack} className="h-full w-full object-fill inset-0 z-0" />
            </div>
            <div className="text-helvetica font-bold text-base px-2 pt-2 text-white">Company Name</div>
            <div className="text-helvetica font-semibold text-sm px-2 text-white">Company Id</div>
            <div className="text-helvetica font-semibold text-sm px-2 text-white">Sector</div>
            <button
                onClick={handleClick}
                className="w-full mt-2 bg-lightgreen text-base font-bold text-white p-1 rounded-b-lg"
            >
                Accepted
            </button>
        </div>
    );
};

export default AcceptCard;