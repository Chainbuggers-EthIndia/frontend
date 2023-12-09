import UploadForm from "../components/Form";
import Logo from "../assets/img/main-logo.svg";
import React, { useState } from "react";
import logout from '../assets/img/logout-btn.png';
import AcceptCard from "../components/AcceptCard";
import RejectCard from "../components/RejectCard";
import dashboard from '../assets/img/dashboard.svg'
import history from '../assets/img/history.svg'
import profile from '../assets/img/profile.svg'
import AuditCard from "../components/AuditCard";
import { useNavigate } from 'react-router-dom';

export default function AuditorPage() {
  const [uploadForm, setUploadForm] = useState(false);

  const generateCompanyCards = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <AuditCard key={index} setUploadForm={setUploadForm} />
    ));
  };


  const HandleButtonClick = () => {
    const navigate = useNavigate();
    console.log('logout');
    navigate('/');
  };

  return (
    <div className="h-screen relative bg-[url(./assets/img/audit-bg.svg)] bg-no-repeat bg-cover">
      {uploadForm && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-50 z-[10] filter blur-sm"></div>
          <div>
            <UploadForm setUploadForm={setUploadForm} />
          </div>
        </>

      )}

      <div className="flex w-screen">
        <div className="rounded-r-lg bg-gray backdrop-filter-blur box-border w-1/5 h-screen border-[1px] border-solid border-lightgray flex flex-col pl-6 justify-between py-6  z-10">
          <div>

            <div className="mt-5">
              <img src={Logo} alt="Logo" className="h-20 pb-8" />
            </div>

            <div className="flex flex-col justify-between p-4">
              <div className="flex flex-col  items-start font-bold text-2xl text-white font-helvetica">
                <div className="pb-4 cursor-pointer hover:underline flex gap-2 items-center"><img src={dashboard} alt="icon" />Dashboard</div>
                <div className="pb-4 cursor-pointer hover:underline flex gap-2 items-center"><img src={history} alt="icon" />History</div>
                <div className="pb-4 cursor-pointer hover:underline flex gap-2 items-center"><img src={profile} alt="icon" />Profile</div>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <img
              src={logout}
              alt="Button"
              className="cursor-pointer"
              onClick={HandleButtonClick}
            />
          </div>
        </div>

        <div className="h-3/5 flex flex-col p-5 mx-6 items-center, justify-around">
          <div className="text-helvetica font-bold text-2xl text-white">Current</div>
          <div className="flex m-4">{generateCompanyCards(1)}</div>
          <div className="text-helvetica font-bold text-2xl text-white">History</div>
          <div className="flex m-4"><RejectCard /> <RejectCard /> <AcceptCard /></div>
        </div>

      </div>
    </div>
  );
}
