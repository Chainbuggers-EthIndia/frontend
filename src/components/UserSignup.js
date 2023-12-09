import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signupImg from "../assets/img/signup-img.png";
import logo from "../assets/img/main-logo.svg";

function UserSignup() {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState(true);
  const [companyId, setCompanyId] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [sector, setSector] = React.useState("");
  const [role, setRole] = React.useState("Company");

  
  async function handleLogin() {
    console.log(companyName, password, role);
    const res = await axios.post("http://localhost:8000/audit/login", {
      companyId: companyId,
      password: password,
      role: role,
    });
    console.log("Response: ", res.data)
    if (res && role === "Auditor") { navigate('/adash'); }

    
  }
  async function handleSignup() {
    console.log(companyName, password, confirmPassword, sector);
    if (password === confirmPassword) {
      if (role === "Company") {
        try {
          const res = await axios.post(
            "http://localhost:8000/company/register",
            {
              name: companyName,
              password: password,
              sector: sector,
            }
          );
          console.log("Response: ", res);
        } catch (error) {
          console.log(error);
        }
      }
      if (role === "Auditor" || role === "Estimator") {
        const res = axios.post("http://localhost:8000/audit/register", {
          name: companyName,
          password: password,
          sector: sector,
          role: role
        });
        console.log("Response: ", res)
      }
    }
  }
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[url('./assets/img/user-bg.svg')] bg-no-repeat bg-cover">
      <img src={signupImg} className="ml-[-40vw] absolute" />
      <div className="bg-[#223A3C] px-[10vw] py-[2vh] flex flex-col gap-4 rounded-xl w-[30vw] ml-[15vw] items-center border-2 border-[#ffffff] h-[90vh]">
        <img src={logo} className="w-[10vw]" />
        <div className="flex gap-8 items-center justify-between bg-offwhite1 p-4 rounded-lg w-[100%] ml-[10vw]">
          <div
            className={`text-[1vw] font-bold cursor-pointer ${login ? "bg-[#622A0F] text-white" : "text-[#333333]"
              } py-2 px-10 rounded-lg w-1/2 text-center`}
            onClick={() => {
              setLogin(!login);
              setCompanyName("");
              setPassword("");
            }}
          >
            Log in
          </div>
          <div
            className={`text-white text-[1vw] font-bold cursor-pointer ${login ? "text-[#333333]" : "bg-[#622A0F] text-white"
              } py-2 px-10 rounded-lg w-1/2 text-center`}
            onClick={() => {
              setLogin(!login);
              setCompanyName("");
              setPassword("");
            }}
          >
            Sign up
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-[2vw] text-[#ffffff] font-[700]">
          {login ? "Login" : "Signup"}
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            {login && (
              <div className="flex flex-col gap-1">
                <label className="text-[#ffffff] text-[1vw] font-bold ">
                  Company Id
                </label>
                <input
                  type="text"
                  placeholder="Company Id"
                  className="text-white text-[1vw] font-bold  outline-none rounded-lg p-2 w-full"
                  onChange={(e) => setCompanyId(e.target.value)}
                />
              </div>
            )}
            {!login && (
              <div className="flex flex-col gap-1">
                <label className="text-[#ffffff] text-[1vw] font-bold ">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="text-white text-[1vw] font-bold  outline-none rounded-lg p-2 w-full"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            )}
            {!login && (
              <div className="flex flex-col gap-1">
                <label className="text-[#ffffff] text-[1vw] font-bold ">
                  Company Sector
                </label>
                <select
                  className="text-[#000000] text-[1vw] font-bold  outline-none rounded-lg p-2 w-full"
                  onChange={(e) => setSector(e.target.value)}
                >
                  <option>Select</option>
                  <option>Chemical</option>
                  <option>Software</option>
                  <option>Manufacturing</option>
                  <option>Transport</option>
                </select>
              </div>
            )}
            <div className="flex flex-col gap-1">
              <label className="text-[#ffffff] text-[1vw] font-bold ">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="text-white text-[1vw] font-bold  outline-none rounded-lg p-2 w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {!login && (
              <div className="flex flex-col gap-1">
                <label className="text-[#ffffff] text-[1vw] font-bold ">
                  Conform Password
                </label>
                <input
                  type="password"
                  placeholder="Conform Password"
                  className="text-white text-[1vw] font-bold  outline-none rounded-lg p-2 w-full"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}
          </div>
          <div>
            <div className="flex gap-2 justify-between">
              <button
                className="flex gap-8 items-center justify-center bg-offwhite1 p-2 cursor-pointer rounded-lg w-1/3"
                onClick={() => {
                  setRole("Auditor");
                }}
              >
                Auditor
              </button>
              <button
                className="flex gap-8 items-center justify-center bg-offwhite1 p-2 cursor-pointer rounded-lg w-1/3"
                onClick={() => {
                  setRole("Company");
                }}
              >
                Company
              </button>
              <button
                className="flex gap-8 items-center justify-center bg-offwhite1 p-2 cursor-pointer rounded-lg w-1/3"
                onClick={() => {
                  setRole("Estimator");
                }}
              >
                Estimator
              </button>
            </div>
            <button
              className="flex gap-8 items-center justify-center p-2 cursor-pointer rounded-lg w-full mt-4 bg-[#622A0F] font-bold text-[1vw] text-[#ffffff]"
              onClick={() => {
                login ? handleLogin() : handleSignup();
              }}
            >
              {login ? "Login" : "Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
