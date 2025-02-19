import React from 'react';
import Header from '../Header';

function HrApproval() {
  return (
    <>
      <section className="bg-sky-100 flex flex-col w-full h-screen">
        <Header/>

        
          {/* Toggle - Responsive */}
          <div className="flex flex-wrap gap-3 mb-5 bg-white rounded-lg p-3 items-center">
            <select className="p-1 border border-black rounded w-full sm:w-1/6 text-gray-600">
              <option className="text-black">Select Department</option>
              <option className="text-black">Finance</option>
              <option className="text-black">Human Resource</option>
              <option className="text-black">Information Technology</option>
            </select>
            <input
              type="date"
              name="From Date"
              className="p-1 border rounded w-full sm:w-1/6 text-gray-600"
            />
            <input
              type="date"
              className="p-1 border rounded w-full sm:w-1/6 text-gray-600"
            />
            <div className="flex-grow"></div>
            <button className="bg-sky-500 text-white px-3 py-1 rounded">
              Show
            </button>
            <button className="bg-teal-600 text-white px-3 py-1 rounded">
              Approve All
            </button>
          </div>

          {/* Colour Components - Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-center h-40 py-2 mb-5">
            <div className="bg-sky-400 text-white p-4 rounded-lg text-center flex flex-col justify-center items-center">
              <p className="text-lg font-medium">0</p>
              <p>Leave</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg text-center flex flex-col justify-center items-center">
              <p className="text-lg font-medium">0</p>
              <p>Late Sitting</p>
            </div>
            <div className="bg-sky-700 text-white p-4 rounded-lg text-center flex flex-col justify-center items-center">
              <p className="text-lg font-medium">0</p>
              <p>Out Door Activity</p>
            </div>
            <div className="bg-gray-600 text-white p-4 rounded-lg text-center flex flex-col justify-center items-center">
              <p className="text-lg font-medium">0</p>
              <p>Missing Time</p>
            </div>
            <div className="bg-sky-400 text-white p-4 rounded-lg text-center flex flex-col justify-center items-center">
              <p className="text-lg font-medium">0</p>
              <p>Loan</p>
            </div>
            <div className="bg-yellow-400 text-white p-4 rounded-lg text-center flex flex-col justify-center items-center">
              <p className="text-lg font-medium">0</p>
              <p>Provident Fund</p>
            </div>
          </div>

      </section>
    </>
  );
}

export default HrApproval;
 








