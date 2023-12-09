import React, { useState } from "react";
import axios from "axios";

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
        "http://192.168.148.85:8000/audit/upload",
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
        "http://192.168.148.85:8000/audit/upload",
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
    <div className="flex items-center justify-center h-screen">
      <div
        style={{
          backgroundColor: "white",
        }}
        className="w-96 bg-white p-8 rounded shadow-md z-2 relative"
      >
        <button
          style={closeButtonStyle}
          className="relative top-[-1rem] left-[19rem]  w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-400"
          onClick={handleCloseForm}
        >
          <span className="text-xs font-bold">X</span>
        </button>

        {isFileUploaded ? (
          // Render UI for uploaded file using the new UploadedFile component
          <UploadedFile
            fileName={uploadedFileName}
            onDelete={handleDeleteFile}
          />
        ) : (
          // Render UI for file upload
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
            Input Field
          </label>
          <input
            type="text"
            id="textInput"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
