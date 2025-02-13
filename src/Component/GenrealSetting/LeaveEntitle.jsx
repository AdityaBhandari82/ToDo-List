import React, { useState } from 'react';
import Header from '../Header';
import crossIcon from "../Image/crossIcon.png"
import downArrow from "../Image/downArrow.png"
import calenderIcon from "../Image/calenderIcon.png"

function LeaveEntitle() {
    const [isOpen, setIsOpen] = useState(false);
  const [isOpenImport, setIsOpenImport] = useState(false);

  const [date, setDate] = useState("");
  return (
    <>
      <section className="bg-sky-100 flex flex-col w-full h-screen">
        <Header/>

        <button
            onClick={() => setIsOpen(true)}
            className="bg-red-800 py-2 px-4 text-white rounded-lg m-4 font-Mukta"
          >
            Add New
          </button>

          <button
            onClick={() => setIsOpenImport(true)}
            className="bg-red-800 py-2 px-4 text-white rounded-lg m-4 font-Mukta"
          >
            Import
          </button>


             {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-xs px-4">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[90%] max-w-[578px] h-[477px] top-[-100px] mx-auto relative">
            <div className="">
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b-[1px] border-[#D3D3D3] pb-3">
                <p className="font-[600] text-[18px]">Add Leave Entitlement</p>
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="w-[14px] h-[14px]">
                  <img src={crossIcon} alt="Close" />
                </button>
              </div>

              {/* Form */}
              <div>
                {/* Select Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  {["Department", "Employee", "Leave Type", "Year"].map((label, index) => (
                    <div key={index} className="relative">
                      <label className="block text-[#535353] font-[600] text-[15px]">{label}</label>
                      <div className="relative">
                        <select className="mt-[9px] w-full p-2 border-[#696969] border-[1px] rounded-lg appearance-none focus:outline-none focus:ring-0 font-[500] text-[16px] text-[#696969]">
                          <option>Select {label}</option>
                          <option>HR</option>
                          <option>Finance</option>
                          <option>IT</option>
                          <option>Marketing</option>
                        </select>
                        {/* Dropdown Icon */}
                        <img
                          src={downArrow}
                          alt="Dropdown Arrow"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-[10px] h-[5px] pointer-events-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Date Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  {["From Date", "To Date"].map((label, index) => (
                    <div key={index}>
                      <label className="block text-[#535353] font-[600] text-[15px]">{label}</label>
                      <div className="relative mt-[9px] flex items-center border-[1px] border-[#696969] rounded-lg p-2">
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="text-[#696969] text-[16px] font-[500] bg-transparent focus:outline-none w-full pr-10 cursor-pointer placeholder-gray-400"
                          placeholder={label}
                          style={{
                            appearance: "none",
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                          }}
                        />
                        {/* Custom Calendar Icon */}
                        <button type="button" className="absolute right-3">
                          <img src={calenderIcon} alt="Calendar Icon" className="w-[18px] h-[20px]" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* No Days Input */}
                <div className="mt-3">
                  <label className="block text-[#535353] font-[600] text-[15px]">No Days</label>
                  <input
                    className="w-full mt-[9px] p-2 border-[#696969] border-[1px] rounded-lg appearance-none focus:outline-none focus:ring-0 font-[500] text-[16px] text-[#696969] placeholder-[#696969]"
                    placeholder="No Days"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap mt-[18px] justify-end gap-2">
                  <button className="w-[92px] h-[40px] rounded-[4px] bg-[#A1A1A1] text-white font-[600] text-[15px] p-[10px]">
                    Close
                  </button>
                  <button className="w-[92px] h-[40px] rounded-[4px] bg-[#238BB2] text-white font-[600] text-[15px] px-[27px] py-[10px]">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

       {/* Popup Modal */}
       {isOpenImport && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-xs px-4">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[90%] max-w-[487px] h-[168px] top-[-100px] mx-auto relative">
            <div className="">
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b-[1px] border-[#D3D3D3] pb-3">
                <p className="font-[600] text-[18px]">Import Leave Balance</p>
                {/* Close Button */}
                <button onClick={() => setIsOpenImport(false)} className="w-[14px] h-[14px]">
                  <img src={crossIcon} alt="Close" className=""/>
                </button>
              </div>

              <div className="flex flex-wrap gap-[10px] items-center">
  {/* File Input Container */}
  <div className=" flex items-center bg-[#83D4FF] border border-[#D6D6D6] w-[296px] h-[50px] px-[20px] sm:w-[250px] md:w-[280px]">
    <input type="file" id="fileInput" className="hidden" />
    <div className="flex items-center justify-between w-full">
      <label
        htmlFor="fileInput"
        className="bg-[#ECECEC] text-[#919191] font-[400] text-[15px] px-[12px] py-[8px] cursor-pointer rounded-md text-center"
      >
        Choose File
      </label>
      <label
        htmlFor="fileInput"
        className="font-[600] text-[14px] text-[#FFFFFF] cursor-pointer whitespace-nowrap"
      >
        No File Chosen
      </label>
    </div>
  </div>

  {/* Import Button */}
  <div className="bg-[#FF0022] flex items-center justify-center text-white font-[600] text-[15px] w-[92px] h-[40px] sm:w-[80px] sm:text-[14px]">
    Import
  </div>
</div>


             
            </div>
          </div>
        </div>
      )}

      </section>
    </>
  );
}

export default LeaveEntitle;
 



