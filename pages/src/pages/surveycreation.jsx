"use client"

import { useState, useRef } from "react"
import { IoArrowBack, IoSearchOutline, IoAdd } from "react-icons/io5"
import { FiUpload } from "react-icons/fi"
import { BiBold, BiItalic, BiUnderline, BiListOl, BiListUl, BiLink } from "react-icons/bi"

const Dashboard = () => {
  const [selectedCategories, setSelectedCategories] = useState([]) // Track selected categories
  const [files, setFiles] = useState([]) // Track uploaded files
  const contentEditableRef = useRef(null) // Ref for the contenteditable div

  // Function to apply formatting
  const applyFormatting = (command, value = null) => {
    if (contentEditableRef.current) {
      document.execCommand(command, false, value) // Apply the command
    }
  }

  // Function to toggle category selection
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category)) // Deselect
    } else {
      setSelectedCategories([...selectedCategories, category]) // Select
    }
  }

  // Function to handle file selection
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files) // Convert FileList to array
    if (selectedFiles.length + files.length > 5) {
      alert("You can upload a maximum of 5 files.") // Show error if more than 5 files
      return
    }
    setFiles([...files, ...selectedFiles]) // Add new files to the state
  }

  // Function to handle file removal
  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index) // Remove file at the specified index
    setFiles(updatedFiles)
  }

  const categories = [
    "Productivity failure",
    "Productivity failure",
    "Mismanagement",
    "Mismanagement",
    "Mismanagement",
    "Mismanagement",
    "Mismanagement",
    "Productivity failure",
    "Productivity failure",
  ]

  const cardData = [
    { status: "New", date: "10/07/2025" },
    { status: "New", date: "10/07/2025" },
    { status: "New", date: "10/07/2025" },
    { status: "Rejected", date: "10/07/2025" },
    { status: "Rejected", date: "10/07/2025" },
    { status: "Accepted", date: "10/07/2025" },
    { status: "Accepted", date: "10/07/2025" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <div className="flex h-screen">
        {/* Left side - Log creation form */}
        <div className="w-1/2 p-6 border-r border-gray-200 overflow-y-auto scrollbar-hide">
          <div className="flex items-center mb-6">
            <button className="text-gray-500 mr-3">
              <IoArrowBack />
            </button>
            <h2 className="text-lg font-medium">Log creation</h2>
          </div>

          {/* Category */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                    selectedCategories.includes(category)
                      ? "bg-[#FF7622] text-white border-[#FF7622]" // Selected state
                      : "bg-white text-[#FF7622] border-[#FF7622]" // Unselected state
                  }`}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Add New Button (Full Width) */}
            <button className="w-full mt-4 px-3 py-2 text-sm rounded-md border border-[#FF7622] text-[#FF7622] flex items-center justify-center">
              <IoAdd className="mr-1" /> Add New
            </button>
          </div>

          {/* Problem Title */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Problem Title</h3>
            <input
              type="text"
              placeholder="Enter the problem"
              className="w-full p-3 bg-gray-100 rounded-md border-none outline-none"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Description</h3>
            <div
              ref={contentEditableRef} // Attach the ref
              contentEditable // Make the div editable
              placeholder="Enter the problem"
              className="w-full p-3 bg-gray-100 rounded-md border-none outline-none min-h-[100px] mb-2"
            ></div>
            <div className="flex gap-2 text-gray-500">
              {/* Bold */}
              <button
                className="p-1"
                onClick={() => applyFormatting("bold")}
              >
                <BiBold />
              </button>

              {/* Italic */}
              <button
                className="p-1"
                onClick={() => applyFormatting("italic")}
              >
                <BiItalic />
              </button>

              {/* Underline */}
              <button
                className="p-1"
                onClick={() => applyFormatting("underline")}
              >
                <BiUnderline />
              </button>

              {/* Ordered List */}
              <button
                className="p-1"
                onClick={() => applyFormatting("insertOrderedList")}
              >
                <BiListOl />
              </button>

              {/* Unordered List */}
              <button
                className="p-1"
                onClick={() => applyFormatting("insertUnorderedList")}
              >
                <BiListUl />
              </button>

              {/* Link */}
              <button
                className="p-1"
                onClick={() => {
                  const url = prompt("Enter the URL:")
                  if (url) {
                    applyFormatting("createLink", url)
                  }
                }}
              >
                <BiLink />
              </button>
            </div>
          </div>

          {/* Media Upload */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-1">Media Upload</h3>
            <p className="text-xs text-gray-500 mb-3">Add your documents here, and you can upload up to 5 files max</p>
            <div className="border border-dashed border-orange-300 rounded-md p-8 flex flex-col items-center justify-center">
              {/* Display Uploaded Images */}
              {files.length > 0 ? (
                <div className="grid grid-cols-3 gap-4 w-full">
                  {files.map((file, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(file)} // Display the image
                        alt={`Uploaded file ${index + 1}`}
                        className="w-full h-24 object-cover rounded-md"
                      />
                      <button
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                        onClick={() => handleRemoveFile(index)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="bg-orange-100 p-3 rounded-full text-orange-500 mb-3">
                    <FiUpload size={24} />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Drag your file(s) to start uploading</p>
                  <p className="text-xs text-gray-500 mb-3">OR</p>

                  {/* File Input */}
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    multiple // Allow multiple files
                    onChange={handleFileChange} // Handle file selection
                  />
                  <label
                    htmlFor="file-upload"
                    className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md text-sm cursor-pointer"
                  >
                    Browse files
                  </label>
                </>
              )}
            </div>
          </div>

          {/* Questions */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Questions</h3>
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="mb-4">
                <p className="text-sm mb-2">{num}.Have you solve this problem</p>
                <input
                  type="text"
                  placeholder="Type your answer"
                  className="w-full p-3 bg-gray-100 rounded-md border-none outline-none"
                />
              </div>
            ))}
          </div>

          {/* Create button */}
          <button className="w-full py-3 bg-orange-500 text-white rounded-md font-medium" onClick={() => alert("Created clicked!")}>
            Create
          </button>
        </div>

        {/* Right side - Search and cards */}
        <div className="w-1/2 p-6 overflow-y-auto scrollbar-hide">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for problem"
                className="w-full p-3 pl-10 bg-gray-100 rounded-md border-none outline-none"
              />
              <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {cardData.map((card, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">Productivity failure</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      card.status === "New"
                        ? "bg-purple-100 text-purple-600"
                        : card.status === "Rejected"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                    }`}
                  >
                    {card.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Productive failure is a learning design where decribe individuals are allowed to fail in a managed..
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{card.date}</span>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                      <img src="/placeholder.svg" className="w-full h-full object-cover" alt="User" />
                    </div>
                    <span className="text-xs text-gray-600">By: J. David</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard