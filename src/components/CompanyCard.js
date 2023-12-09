import React, { useState } from 'react';
// import AuditPopup from './Form'; // Import your custom AuditPopup component
import UploadForm from './Form'

const CompanyCard = (props) => {
    // const [isAuditPopupOpen, setAuditPopupOpen] = useState(false);

    const handleAuditClick = () => {
        props.setUplaodForm(true);
    };


    return (
        <div className="h-80 w- 84 m-2 rounded-lg bg-offwhite1 z-2 relative">
            <div className="h-1/2 rounded-t-lg top-0 bg-green flex items-center justify-center text-white font-bold text-xl">
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
