import React, { useState } from 'react';
import AuditPopup from './Form'; // Import your custom AuditPopup component

const CompanyCard = () => {
    const [isAuditPopupOpen, setAuditPopupOpen] = useState(false);

    const handleAuditClick = () => {
        setAuditPopupOpen(true);
    };

    const closeAuditPopup = () => {
        setAuditPopupOpen(false);
    };

    return (
        <div className="h-80 w-1/5 rounded-lg bg-darkgreen">
            <div className="h-1/2 rounded-t-lg top-0 bg-offwhite1 flex items-center justify-center text-white font-bold text-xl">
            </div>
            <button
                onClick={handleAuditClick}
                className="w-full bg-blue-500 text-white p-2 rounded-b-lg"
            >
                Audit
            </button>
            {isAuditPopupOpen && <AuditPopup onClose={closeAuditPopup} />}
        </div>
    );
};

export default CompanyCard;
