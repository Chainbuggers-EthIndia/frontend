import React from 'react';
// import UploadForm from './Form'
import companyBack from '../assets/img/company.svg'

const CompanyCard = (props) => {
    const handleAuditClick = () => {
        props.setUplaodForm(true);
    };

    return (
        <div className="h-[310px] w-60 mx-6 m-2 rounded-lg bg-offwhite1 z-2 relative">
            <div className="h-1/2 rounded-t-lg top-0 flex items-center justify-center text-white font-bold text-xl">
                <img src={companyBack} className="h-full w-full object-fill inset-0 z-0" />
            </div>
            
            <button
                onClick={handleAuditClick}
                className="w-full bg-blue-500 text-white p-2 rounded-b-lg"
            >
                Audit
            </button>
        </div>
    );
};

export default CompanyCard;
