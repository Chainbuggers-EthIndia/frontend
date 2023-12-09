import React from 'react';
import companyBack from '../assets/img/company.svg'

const AuditCard = (props) => {
    const handleAuditClick = () => {
        props.setUploadForm(true);
    };

    return (
        <div className="h-[250px] w-52 mx-6 m-2 rounded-lg bg-offwhite1 z-2 relative">
            <div className="h-[135px] rounded-t-lg top-0 flex flex-col text-white font-bold text-xl">
                <img src={companyBack} className="h-full w-full object-fill inset-0 z-0" />
            </div>
            <div className="text-helvetica font-bold text-base px-2 pt-2 text-white">Company Name</div>
            <div className="text-helvetica font-semibold text-sm px-2 text-white">Company Id</div>
            <div className="text-helvetica font-semibold text-sm px-2 text-white">Sector</div>
            <button
                onClick={handleAuditClick}
                className="w-full mt-2 bg-blue-500 text-base font-bold text-white p-1 rounded-b-lg"
            >
                Audit
            </button>
        </div>
    );
};

export default AuditCard;
