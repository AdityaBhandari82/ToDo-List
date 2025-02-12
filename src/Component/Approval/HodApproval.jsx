import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarDays } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

function Approval() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <section className="bg-sky-100 flex flex-col w-full h-screen">
        {/* Navbar */}
        <div className="h-20 bg-slate-700 flex flex-row w-full justify-end items-center pr-4">
          <div className="flex justify-center items-center space-x-1.5">
            <p className="text-gray-300 text-xl">Santosh</p>
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
              className="h-11 w-11 rounded-full"
              alt="User"
            />
          </div>
        </div>

        {/* Content */}
        <div className="mx-8 my-5">
          <p className="text-base font-semibold">Transaction Status Report</p>

          {/* Date Picker with Calendar Icon */}
          <div className="flex justify-between bg-white">
          <div className="flex">
          <div className="bg-white p-3.5 ">
            <div className="bg-white border border-black flex items-center px-4 py-2 w-64 rounded-lg relative">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="From Date"
                className="w-full px-3 outline-none bg-transparent"
              />
              <CalendarDays className="h-5 w-5 text-gray-500 absolute right-3 cursor-pointer" />
            </div>
          </div>
          <div className="bg-white p-2  mt-2">
            <div className="bg-white border border-black flex items-center px-4 py-2 w-64 rounded-lg relative">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="To Date"
                className="w-full px-3 outline-none bg-transparent"
              />
              <CalendarDays className="h-5 w-5 text-gray-500 absolute right-3 cursor-pointer" />
            </div>
          </div>
          </div>
          <div className="flex justify-center items-center mr-2.5 ">
            <button className="px-3 py-1.5 bg-blue-400 rounded-lg">Show</button>
          </div>
          </div>
          <div className="flex flex-col mt-2 bg-white">
            <h3 className="p-2">Leave</h3>
            <div className="flex bg-gray-300 m-2 rounded-lg">
              <p className="pl-2 py-2">No Record Found !</p>
            </div>
          </div>
          <div className="flex flex-col mt-2 bg-white">
            <h3 className="p-2">Late Sitting</h3>
            <div className="flex bg-gray-300 m-2 rounded-lg">
              <p className="pl-2 py-2">No Record Found !</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Approval;
