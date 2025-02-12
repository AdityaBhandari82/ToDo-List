import React, { useState } from "react";
import Sidebar from "../Sidebar.jsx"
import Home from "./Home.jsx";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
// import myImage from "../Image/profileImage.png";

function EmployeeDashboard() {
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("From Date");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row bg-sky-100 w-full min-h-screen">
        
        {/* Sidebar Toggle for Mobile */}
        <div className="md:hidden p-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close Menu" : "Open Menu"}
          </button>
        </div>

        {/* Sidebar - Hidden on Mobile, Visible on md+ */}
        <div className={`w-full md:w-3/12 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-9/12">
          <Home />
          <div className="p-4 bg-[#dbf2ff]">
            
            {/* Dashboard Header */}
            <div className="grid grid-cols-1 md:grid-cols-[25%_auto]">
              <div className="flex items-center gap-2 border border-gray-300 px-4 py-3 bg-white">
                <GoHome className="text-[22px] text-[#636363]" />
                <h1 className="font-[500] text-[18px] md:text-[20px] text-[#636363]">
                  Employee Dashboard
                </h1>
              </div>
              <div className="flex items-center gap-3 border-b-2 border-[#D3D3D3] p-3">
                <FaRegUser className="text-[#0091DF] text-[20px] md:text-[25px]" />
                <p className="font-[500] text-[#0091DF] text-[20px] md:text-[26px]">
                  Management Dashboard
                </p>
              </div>
            </div>

            {/* Attendance Section */}
            <div className="bg-white p-4 mt-5 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-4 items-center">
                
                {/* Attendance Buttons */}
                <div className="flex flex-wrap gap-2 md:gap-4">
                  {["3 Days", "7 Days", "15 Days", "1 Month", "2 Months"].map((day, index) => (
                    <div key={index} className="bg-[#A4DFFF] px-4 py-2 rounded-xl font-[400] text-[14px] md:text-[15px]">
                      <p>{day}</p>
                    </div>
                  ))}
                </div>

                {/* Date Picker & Show Button */}
                <div className="flex flex-wrap justify-end gap-2 md:gap-4">
                  <input
                    type="date"
                    className="border border-[#D6D6D6] py-1 px-2 text-[#818181] text-[14px] md:text-[15px] rounded"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                  <input
                    type="date"
                    className="border border-[#D6D6D6] py-1 px-2 text-[#818181] text-[14px] md:text-[15px] rounded"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                  <button className="bg-[#00A6FF] px-4 py-2 text-white rounded-xl font-medium">
                    Show
                  </button>
                </div>
              </div>
            </div>

            {/* Profile & Additional Section */}
            <div className="grid grid-cols-1 md:grid-cols-[30%_auto] gap-4 mt-5">
              
              {/* Profile Card */}
              <div className="bg-white p-6 text-center rounded-xl">
                <img src="" alt="Profile" className="w-32 h-32 mx-auto" />
                <p className="font-[700] text-[18px] md:text-[20px] text-[#636363] mt-3">
                  Ibad ur Rahman
                </p>

                {/* File Upload */}
                <div className="border border-[#D6D6D6] flex justify-between items-center px-3 py-2 mt-4 rounded-lg">
                  <input type="file" id="fileInput" className="hidden" />
                  <label htmlFor="fileInput" className="text-gray-600 cursor-pointer">
                    Choose a Photo...
                  </label>
                  <label htmlFor="fileInput" className="bg-[#ECECEC] text-[#676767] px-4 py-2 rounded-lg cursor-pointer">
                    Browse
                  </label>
                </div>

                {/* Update Button */}
                <button className="bg-[#2EAEA5] px-6 py-2 mt-4 text-white rounded-lg font-[600] text-[14px] md:text-[15px]">
                  Update
                </button>
              </div>

              {/* Additional Section */}
              <div className="bg-white p-6 rounded-xl">
                {/* Add more content here */}
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeDashboard;
