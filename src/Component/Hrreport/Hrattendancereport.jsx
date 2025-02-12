// import img1 from '../assets/Vector1.png';
import React from "react";
export default function Hrattendancereport() {
  

  return (
    <div className="bg-[#DBF2FF] p-6 rounded-lg min-h-screen">
      <h2 className="text-2xl font-semibold px-3 mb-4">HR Attendance Report</h2>
      <div className="bg-white p-4 rounded-lg flex flex-wrap mt-8  gap-4 items-center">
        <select className="w-60 p-2 text-gray-600 border-2 border-gray-600 outline-gray-400 rounded-md">
          <option>Select Department</option>
          <option value="hr">HR</option>
          <option value="it">IT</option>
          <option value="finance">Finance</option>
        </select>
        
        <select className="w-60 p-2 border-2 text-gray-600 border-gray-600 outline-gray-400 rounded-md">
          <option>Select Employee</option>
          <option value="john">John Doe</option>
          <option value="jane">Jane Smith</option>
        </select>
        
        <select className="w-60 p-2 border-2 text-gray-600 border-gray-600 outline-gray-400 rounded-md">
          <option>Attendance Detail</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
        
        <div className="relative ">
          <input type="date" className="p-2 text-gray-600 border-2 border-gray-600 outline-gray-400 rounded-md w-60  " placeholderText="Select start date" />
          
        </div>
        
        <div className="relative">
        <input type="date"  className="p-2 border-2 border-gray-600 outline-gray-400 text-gray-600 rounded-md w-60" placeholderText="Select end date" />
          
        </div>
        
        <button className="bg-blue-500 text-white px-8 py-2 ml-1 rounded-md">Show</button>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s" alt="" className="bg-gray-200 p-2  ml-3 rounded"/>

        <input type="text" placeholder="Select Filter" className="mt-4 w-full p-2 border-2 p-4 rounded-md" />
      </div>
      
      
      
    </div>
  );
}



;















