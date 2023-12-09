import UploadForm from "../components/Form";
import Logo from "../assets/img/main-logo.svg";
import React, { useState } from "react";
import logout from '../assets/img/logout-btn.png';
import AcceptCard from "../components/AcceptCard";
import RejectCard from "../components/RejectCard";
import AuditCard from "../components/AuditCard";
export default function AuditorPage() {
  const [uploadForm, setUploadForm] = useState(false);

  const generateCompanyCards = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <AuditCard key={index} setUploadForm={setUploadForm} />
    ));
  };


  const handleButtonClick = () => {
    console.log('logout');
  };

  return (
    <div className="h-screen relative bg-[url(./assets/img/audit-bg.svg)] bg-no-repeat bg-cover">
      {uploadForm &&(
        <>
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-50 z-[10] filter blur-sm"></div> 
        <div>
          <UploadForm setUploadForm={setUploadForm} />
        </div>
        </>
        
       )}
     
      <div className="flex w-screen">
        <div className="relative rounded-r-lg bg-gray backdrop-filter-blur box-border w-1/5 h-screen border-[1px] border-solid border-lightgray">
          <div className="mt-5">
            <img src={Logo} alt="Logo" className="h-12 w-48" />
          </div>

          <div className="flex flex-col justify-between p-4">
            <div className="flex flex-col pl-6 items-start font-bold text-2xl text-white font-helvetica">
              <div className="pb-4">Dashboard</div>
              <div className="pb-4">History</div>
              <div className="pb-4">Profile</div>
              <div className="mb-2">
                <img
                  src={logout}
                  alt="Button"
                  className="cursor-pointer"
                  onClick={handleButtonClick}
                />
              </div>
            </div>
          </div>
        </div>
       
          <div className="h-3/5 flex flex-col p-5 mx-6 items-center, justify-around">
            <div className="text-helvetica font-bold text-2xl text-white">Current</div>
            <div className="flex m-4">{generateCompanyCards(3)}</div>
            <div className="text-helvetica font-bold text-2xl text-white">History</div>
            <div className="flex m-4"><RejectCard /> <RejectCard /> <AcceptCard /></div>
          </div>
        
      </div>
    </div>
  );
}
