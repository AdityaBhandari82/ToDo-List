import React, { useState } from "react";

function Hrattendancereport() {
  const [showTable, setShowTable] = useState(false);
 

  const handleShowClick = () => {
    setShowTable(true);
  };

  return (
    <div className="bg-[#DBF2FF] p-4 md:p-6 min-h-screen flex justify-center w-full">
      <div className="bg-white p-4 rounded-lg w-full">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
          HR Attendance Report
        </h2>

        <div className="flex flex-wrap md:flex-nowrap gap-4 items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-4 flex-1">
            <select className="p-2 text-gray-600 border border-gray-400 rounded-md w-full">
              <option>Select Department</option>
              <option value="hr">HR</option>
              <option value="it">IT</option>
              <option value="finance">Finance</option>
            </select>

            <select className="p-2 text-gray-600 border border-gray-400 rounded-md w-full">
              <option>Select Employee</option>
              <option value="john">John Doe</option>
              <option value="jane">Jane Smith</option>
            </select>

            <select className="p-2 text-gray-600 border border-gray-400 rounded-md w-full">
              <option>Attendance Detail</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
            </select>

            <input
              type="date"
              className="p-2 text-gray-600 border border-gray-400 rounded-md w-full"
            />

            <input
              type="date"
              className="p-2 text-gray-600 border border-gray-400 rounded-md w-full"
            />
          </div>

          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <button
              className="bg-blue-500 text-white py-2 px-6 rounded-md w-full md:w-auto"
              onClick={handleShowClick}
            >
              Show
            </button>
          </div>
        </div>

      
        {showTable  && (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 p-2">Employee Code</th>
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Department</th>
                  <th className="border border-gray-300 p-2">Date</th>
                  <th className="border border-gray-300 p-2">Day</th>
                  <th className="border border-gray-300 p-2">IN</th>
                  <th className="border border-gray-300 p-2">OUT</th>
                  <th className="border border-gray-300 p-2">Working Time</th>
                  <th className="border border-gray-300 p-2">Late Minutes</th>
                  <th className="border border-gray-300 p-2">Early Minutes</th>
                  <th className="border border-gray-300 p-2">Shift IN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">1234213450</td>
                  <td className="border border-gray-300 p-2">Ibad ur Rahman</td>
                  <td className="border border-gray-300 p-2">Finance</td>
                  <td className="border border-gray-300 p-2">01-01-2024 12:00:00 AM</td>
                  <td className="border border-gray-300 p-2">Sunday</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2">0</td>
                  <td className="border border-gray-300 p-2">5</td>
                  <td className="border border-gray-300 p-2">10:00 PM</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">1234213450</td>
                  <td className="border border-gray-300 p-2">Ibad ur Rahman</td>
                  <td className="border border-gray-300 p-2">Finance</td>
                  <td className="border border-gray-300 p-2">11-05-2024 11:00:00 AM</td>
                  <td className="border border-gray-300 p-2">Monday</td>
                  <td className="border border-gray-300 p-2">5:30 PM</td>
                  <td className="border border-gray-300 p-2">9:10 AM</td>
                  <td className="border border-gray-300 p-2">15:39:29</td>
                  <td className="border border-gray-300 p-2">0</td>
                  <td className="border border-gray-300 p-2">0</td>
                  <td className="border border-gray-300 p-2">9:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hrattendancereport;