import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
// import saira from "../assets/saira.png";
import { Link } from "react-router-dom";

const EmployeeProfile = () => {
  const [selectedEmployee, setSelectedEmployee] = useState("Saira Khan");

  return (
    <div className="bg-[#DBF2FF] p-6 rounded-lg min-h-screen">
      <h1 className="font-bold text-xl">Employee Info</h1>

      {/* Filters Section */}
      <div className="bg-white p-4 rounded-lg flex flex-wrap mt-3 gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-4 w-full sm:w-auto">
          <select className="w-full sm:w-60 p-2 text-gray-600 border-2 border-gray-600 outline-gray-400 rounded-md">
            <option>Select Department</option>
            <option value="hr">Officer</option>
            <option value="it">Jr. Officer</option>
            <option value="finance">Manager</option>
          </select>

          <select className="w-full sm:w-60 p-2 border-2 text-gray-600 border-gray-600 outline-gray-400 rounded-md">
            <option>Select Employee</option>
            <option value="paid leave">Saira Khan</option>
            <option value="unpaid leave">Hassan Khan</option>
            <option value="voluntary leave">Nadeem Ur Rahman</option>
            <option value="voluntary leave">Mithali Ade</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <button className="bg-blue-400 text-white px-4 py-2 rounded w-full sm:w-auto">
            Show
          </button>
          <button className="bg-green-700 text-white px-4 py-2 rounded w-full sm:w-auto">
            Add New
          </button>
          <button className="bg-red-700 text-white px-4 py-2 rounded w-full sm:w-auto">
            Import
          </button>
        </div>
      </div>

      
      <div className="p-3">
        <div className="flex flex-col md:flex-row mt-4 gap-4">
          {/* Profile Image Section */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
            <img src="" alt="Profile" className="rounded-full mx-auto w-32 h-32" />
            <h3 className="font-semibold mt-2">{selectedEmployee}</h3>
            <input type="file" className="mt-4 border p-2 w-full rounded-md" />
            <button className="bg-green-500 text-white px-4 py-2 w-full mt-2 rounded">
              Update
            </button>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
            {/* Navigation Tabs */}
            <div className="flex overflow-x-auto border-b pb-2 mb-4">
              <button className="mr-4 font-semibold border-b-2 border-gray-600">
                Employee Info
              </button>
              <Link to="/employeemanagement/employee_contact">
                <button className="text-blue-500 px-4 pb-2">Contact Info</button>
              </Link>
              <button className="text-blue-500 px-4 pb-2">Employment Info</button>
              <button className="text-blue-500 px-4 pb-2">Payroll</button>
              <button className="text-blue-500 px-4 pb-2">Security</button>
              <button className="text-blue-500 px-4 pb-2">Files</button>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={selectedEmployee}
                  className="border p-2 w-full rounded-md"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Gender</label>
                <div className="flex space-x-4 mt-2">
                  <label>
                    <input type="radio" name="gender" className="mr-2" /> Male
                  </label>
                  <label>
                    <input type="radio" name="gender" className="mr-2" /> Female
                  </label>
                  <label>
                    <input type="radio" name="gender" className="mr-2" /> None
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Machine Code</label>
                <input type="text" className="border p-2 w-full rounded-md" disabled />
              </div>
              <div>
                <label className="block text-sm font-medium">Date of Birth</label>
                <div className="flex items-center border p-2 rounded-md">
                  <input
                    type="text"
                    className="w-full outline-none"
                    value="9/03/2024 12:00:00 AM"
                    readOnly
                  />
                  <FaCalendarAlt className="text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Street Address</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded-md"
                  value="House No: 43, Street No: 11"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded-md"
                  value="Mumbai"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Postal Code</label>
                <input type="text" className="border p-2 w-full rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded-md"
                  value="India"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;