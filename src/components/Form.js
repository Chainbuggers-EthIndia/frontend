import React, { useState } from "react";
import axios from "axios";
import Lexeco1ABI from "../Lexeco1ABI.json";
import Web3 from "web3";


// New component to display uploaded file
const UploadedFile = ({ fileName, onDelete }) => (
  <div className="mb-4 p-4 border-2 border-gray-300 rounded-md flex items-center justify-between">
    <div className="flex items-center space-x-2">
      {/* Icon for document */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      {/* File name */}
      <p className="text-sm text-gray-500">{fileName}</p>
    </div>
    {/* Delete icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 text-red-500 cursor-pointer"
      onClick={onDelete}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>
);

export default function Form(props) {
    const closeButtonStyle = {
        backgroundColor: "#E5E5E5",
    };
    const handleCloseForm =()=>{
        props.setUploadForm(false)
    }
    const [uploadedFileName, setUploadedFileName] = useState(null);
    const [uploadedFilePath, setUploadedFilePath] = useState(null);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    console.log("YOO", uploadedFilePath)

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://lexeco.onrender.com/audit/upload",
        formData
      );

      console.log("Server response:", response.data);

      setUploadedFileName(file.name);
      setUploadedFilePath(response.data.path);

      setIsFileUploaded(true);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const Web3 = require("web3");

  const Lexeco1ABI = require("../Lexeco1ABI.json");

  const web3 = new Web3("https://api-sepolia.scrollscan.com/api");

  const contractAddress = "0x79BA10AD79a7b663B6C6661a9aA4b104DaBA77dF";

  const ipfsStore = new web3.eth.Contract(Lexeco1ABI, contractAddress);

  const handleDeleteFile = () => {

    setUploadedFileName(null);
    setIsFileUploaded(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("border-blue-500", "border-2");
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove("border-blue-500", "border-2");
  };


  const handleDrop = async (e) => {
    e.preventDefault();

    e.currentTarget.classList.remove("border-blue-500", "border-2");

    const file = e.dataTransfer.files[0];

    console.log("File dropped:", file);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "https://lexeco.onrender.com/audit/upload",
        formData
      );

      console.log("Server response:", response.data);

      setUploadedFileName(file.name);
      setUploadedFilePath(response.data.path);

      setIsFileUploaded(true);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (

    <div className="flex items-center justify-center bg-[#ffffff] z-[99] absolute top-[20%] left-[30%]">
      <div
        className="w-96 bg-white p-8 rounded shadow-md"
      >
        <button
          style={closeButtonStyle}
          className="relative left-[24vw] bottom-[2vh] w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-400 cursor-pointer"
          onClick={handleCloseForm}
        >
          <span className="text-xs font-bold">X</span>
        </button>

        {isFileUploaded ? (
          <UploadedFile
            fileName={uploadedFileName}
            onDelete={handleDeleteFile}
          />
        ) : (
          <div
            className="mb-4 border-dashed border-2 border-gray-300 p-4 rounded-md flex flex-col items-center"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-gray-400 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <p className="text-sm text-gray-500">
                <span className="font-bold">Choose a file</span> or drag &amp;
                drop it here
              </p>
            </div>
            <label
              htmlFor="fileInput"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
            >
              Upload File
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        )}

        {/* Input Field */}
        <div className="mb-4">
          <label
            htmlFor="textInput"
            className="block text-sm font-medium text-gray-700"
          >
            Audit Value
          </label>
          <input
            type="text"
            id="textInput"
            className="mt-1 p-2 w-[95%] border rounded-md"
          />
        </div>


        {/* Submit Button */}  {/* //TRIGGER Lexeco1 Carbon Credit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-black p-2 rounded-md hover:bg-blue-600 cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
