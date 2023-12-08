import React, {useState} from "react";

export default function Form() {
    const closeButtonStyle = {
        backgroundColor: '#E5E5E5',
      };
      const [uploadedFileName, setUploadedFileName] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle file upload logic here
    console.log('File uploaded:', file);
    setUploadedFileName(file.name);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    // Handle dropped file logic here
    console.log('File dropped:', file);
    setUploadedFileName(file.name);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        style={{
          backgroundColor: "white",
        }}
        className="w-96 bg-white p-8 rounded shadow-md"
      >
       <button
          style={closeButtonStyle}
          className="relative top-[-1rem] left-[19rem]  w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-400"
          onClick={() => console.log('Close button clicked')} // Replace with your close button logic
        >
          <span className="text-xs font-bold">X</span>
        </button>

        {/* Upload/Drag and Drop Section */}
        <div
          className="mb-4 border-dashed border-2 border-gray-300 p-4 rounded-md flex flex-col items-center"
          onDragOver={handleDragOver}
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
              <span className="font-bold">Choose a file</span> or drag &amp; drop it here
            </p>
            {uploadedFileName && (
              <p className="text-xs text-gray-500">File Name: {uploadedFileName}</p>
            )}
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
