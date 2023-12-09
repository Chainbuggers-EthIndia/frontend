import UploadForm from "../components/Form";

import React, { useState } from "react";
import backgroundImage from "../assets/img/audit-bg.svg";
import CompanyCard from "../components/CompanyCard";
import SidePanel from "../components/SidePanel";
export default function AuditorPage() {
  const [uplaodForm, setUplaodForm] = useState(false);
  const generateCompanyCards = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <CompanyCard key={index} setUplaodForm={setUplaodForm} />
    ));
  };
  return (
    <div className="h-screen relative">
      <img
        src={backgroundImage}
        alt="Background"
        className="h-full w-full object-cover absolute inset-0 z-0"
      />
      <div className="flex w-screen">
        <SidePanel />
        {uplaodForm ? (
          <UploadForm setUplaodForm={setUplaodForm} />
        ) : (
          <div className="flex flex-col mx-6 items-center, justify-around">
            <div className="text-helvetica font-bold text-2xl text-white">Current</div>
            <div className="flex m-4">{generateCompanyCards(3)}</div>
            <div className="text-helvetica font-bold text-2xl text-white">History</div>
            <div className="flex m-4">{generateCompanyCards(2)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
