
import Logo from "../assets/img/main-logo.svg";
import Dashicon from "../assets/img/dashboardicon.svg";
import Alerticon from "../assets/img/alert.svg";
import Reporticon from "../assets/img/report.svg";
import Transectionicon from "../assets/img/transection.svg";
import Walleticon from "../assets/img/walleticon.svg";
import React, { useState } from "react";
import logout from '../assets/img/logout-btn.png';function UserDashboard() {
    const handleButtonClick = () => {
        console.log('logout');
      };
    
    return(
        <div className="h-screen bg-[url(./assets/img/user-bg.svg)] bg-no-repeat bg-cover">
        <div className="rounded-r-lg bg-gray backdrop-filter-blur box-border w-1/5 h-screen border-[1px] border-solid border-lightgray flex flex-col pl-6 justify-between py-6">
        <div>
                
            <div className="mt-5">
            <img src={Logo} alt="Logo" className="h-20 pb-8" />
            </div>

            <div className="flex flex-col justify-between p-4">
                <div className="flex flex-col  items-start font-bold text-2xl text-white font-helvetica">
                    <div className="pb-4 cursor-pointer hover:underline flex gap-2 items-center"><img src={Dashicon} alt="icon"/>Dashboard</div>
                    <div className="pb-4 cursor-pointer hover:underline flex gap-2 items-center"><img src={Alerticon} alt="icon"/>Alert</div>
                    <div className="pb-4 cursor-pointer hover:underline flex gap-2 items-center"><img src={Reporticon} alt="icon"/>Report</div>
                    <div className="pb-4 cursor-pointer hover:underline flex gap-2 items-center"><img src={Transectionicon} alt="icon"/>Transection</div>
                    <div className="pb-4 cursor-pointer hover:underline flex gap-2 items-center"><img src={Walleticon} alt="icon"/>Wallet</div>
                </div>
            </div>
        </div>
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
    )
}
export default UserDashboard