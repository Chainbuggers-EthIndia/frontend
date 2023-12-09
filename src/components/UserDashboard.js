
import Logo from "../assets/img/main-logo.svg";
import Dashicon from "../assets/img/dashboardicon.svg";
import Alerticon from "../assets/img/alert.svg";
import Reporticon from "../assets/img/report.svg";
import Transectionicon from "../assets/img/transection.svg";
import Walleticon from "../assets/img/walleticon.svg";
import User from "../assets/img/usericon.svg";
import Graph from "../assets/img/graph.svg";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import logout from '../assets/img/logout-btn.png';function UserDashboard() {
    const [companyName,setCompanyName]= useState("EmissionForge Corp")
    const [audit,setAudit]=useState(false)
    const [selectedAuditCompanyList,setSelectedAuditCompanyList]=useState([])
    const [auditCompanyList,setAuditCompanyList]=useState([])
    const [tradable,setTradable] = useState(100)
    const [nonTradable,setNonTradable] = useState(0)
    const handleButtonClick = () => {
        console.log('logout');
      };
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://lexeco.onrender.com/audit/get/auditors');            
            setAuditCompanyList(response.data.data);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    console.log("audit",auditCompanyList)

    const addToSelectedList = (auditor) => {
        setSelectedAuditCompanyList([...selectedAuditCompanyList, auditor]);
      };
      const closeButtonStyle = {
        backgroundColor: "#E5E5E5",
    };

    return(
        <div className="text-helvetica h-screen bg-[url(./assets/img/user-bg.svg)] bg-no-repeat bg-cover flex">
             {audit && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center backdrop-filter backdrop-blur-md">
          <div className="bg-white p-6 rounded shadow-md w-[30vw]">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <div className="text-xl font-bold">Select Company</div>
                    <div className="text-lg font-semibold">Select any 1 company for auditing</div>
                </div>
                <button
                    style={closeButtonStyle}
                    className="relative w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-400 cursor-pointer"
                    onClick={()=>setAudit(!audit)}
                    >
                    <span className="text-xs font-bold">X</span>
                </button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="py-2 underline text-[#B5B7C0]">Customer Name</th>
                  <th className="py-2 underline text-[#B5B7C0]">Selection</th>
                </tr>
              </thead>
              <tbody>
                {auditCompanyList.map((auditor) => (
                  <tr key={auditor._id}>
                    <td>{auditor.name}</td>
                    <td>
                      <button className="text-[#00B087] outline-[#16C098] " onClick={() => {addToSelectedList(auditor)}}>Select</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
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
      <div className="flex flex-col">
        <div className="flex justify-end items-center w-[76vw] p-8 gap-2 text-white font-semibold">
            <button className="p-2 rounded-lg bg-[#6e402a] outline-none border-0 text-white w-[8vw] cursor-pointer">Credit Zone</button>
            {companyName} 
            <img src={User} alt="usericon"/>
        </div>
        <div className="flex justify-between px-10 ">        
        <div className="w-[30vw] h-[80vh] p-4 px-8 flex flex-col gap-6">
            <div className="bg-[#223A3C] h-1/2 rounded-lg p-4">
                <div className="text-white text-xl font-bold pt-4 pl-6">Auditing List</div>
                <div className="flex flex-col justify-center items-center p-2 gap-4 h-[80%]">
                    {
                    selectedAuditCompanyList.length!=0 ? (
                        <>
                    
                                                       <table className="w-full overflow-y-scroll">
              <thead>
                <tr className="text-left">
                  <th className="py-2 underline text-[#B5B7C0]">Customer Name</th>
                  <th className="py-2 underline text-[#B5B7C0]">Selection</th>
                </tr>
              </thead>
              <tbody>
                {selectedAuditCompanyList.map((auditor) => (
                  <tr key={auditor._id}>
                    <td className="text-white">{auditor.name}</td>
                    <td>
                      <button className="text-[#00B087] outline-[#16C098]">Selected</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
                    <button className="bg-[#622A0F] p-2 rounded-lg border-0 outline-none w-[7vw] text-white cursor-pointer" onClick={()=>setAudit(!audit)}> Add More </button>
                    </>

            ):(
                        <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className="text-white text-lg font-semibold">No auditing listed</div>
                    <button className="bg-[#622A0F] p-2 rounded-lg border-0 outline-none w-[7vw] text-white cursor-pointer" onClick={()=>setAudit(!audit)}> Audit Now </button>
                    </div>
                    )}
                </div>

            </div>
            <div className="bg-[#223A3C] h-1/2 rounded-lg p-4">
                <div className="text-white text-xl font-bold pt-4 pl-6">Auditing value graph</div>
                <img src={Graph} alt="graph" className="p-4 w-[90%]"/>

            </div>

        </div>
        <div className="w-[30vw] p-4 flex flex-col gap-4">
            <div className="bg-[#223A3C] h-[40vh] rounded-lg p-6 flex flex-col gap-4">
            <div className="text-white text-xl font-bold">Wallet</div>
            <div className="bg-[#728182] h-[15vh] rounded-lg">
                <div className="text-[#000000] text-xl font-bold p-4">Tradable:</div>
                <div className="text-[#ffffff] text-3xl font-bold px-4">{tradable}</div>
            </div>
            <div className="bg-[#728182] h-[15vh] rounded-lg">
                <div className="text-[#000000] text-xl font-bold p-4">Non Tradable:</div>
                <div className="text-[#ffffff] text-3xl font-bold px-4">{nonTradable}</div>
            </div>
            </div>
            <div className="bg-[#223A3C] h-[26vh] rounded-lg p-4">
                <div className="text-white text-xl font-bold pt-4 pl-6">Trades</div>
                

            </div>

        </div>
      </div>
      </div>
</div>
    )
}
export default UserDashboard