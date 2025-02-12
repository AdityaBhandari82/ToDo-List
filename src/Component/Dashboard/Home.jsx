import React from 'react';
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="bg-sky-100 flex flex-col w-full h-screen">
        <div className="h-20 bg-slate-700 flex flex-row w-full justify-end items-center pr-4">
          <div className="flex justify-center items-center space-x-1.5">
            <p className="text-gray-300 text-xl">Santosh</p>
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
              className="h-16 w-16 rounded-full"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#dbf2ff] p-4">
            <div className="flex flex-wrap gap-4 border-b pb-2">
              <Link to="/employeeDashboard">
                <div className="cursor-pointer flex items-center gap-3">
                  <img src="" alt="Home Icon" />
                  <p className="font-medium text-[#0091DF] text-lg md:text-xl">
                    Employee Dashboard
                  </p>
                </div>
              </Link>
              <div className="flex items-center gap-3">
                <img src="" alt="User Icon" />
                <p className="font-medium text-[#0091DF] text-lg md:text-xl">
                  Management Dashboard
                </p>
              </div>
            </div>

            {/* Grid Section - Kept Original Size */}
            <div className="ml-4 mt-4">
              <div className="grid grid-cols-[15%_30%_15%_15%_15%] gap-5">
                <div className="bg-[#26B3FF] flex flex-col items-center justify-center pt-9 pb-7 rounded-2xl">
                  <div className="flex flex-col items-center text-white">
                    <img src="" alt=" Icon" />
                    <h1 className="pt-4 font-[500] text-[18px] text-center">15</h1>
                    <p className="pt-1 font-[500] text-[14px]">Total Employee</p>
                  </div>
                </div>
                <div className="bg-[#24948A] flex flex-col items-center justify-center pt-9 pb-7 rounded-2xl">
                  <div className="flex flex-col items-center text-white">
                    <img src="" alt=" Icon" />
                    <h1 className="pt-4 font-[500] text-[18px] text-center">0</h1>
                    <p className="pt-1 font-[500] text-[14px]">Present Today</p>
                  </div>
                </div>
                <div className="bg-[#FFD755] flex flex-col items-center justify-center pt-9 pb-7 rounded-2xl">
                  <div className="flex flex-col items-center text-white">
                    <img src="" alt=" Icon" />
                    <h1 className="pt-4 font-[500] text-[18px] text-center">15</h1>
                    <p className="pt-1 font-[500] text-[14px]">Absent Today</p>
                  </div>
                </div>
                <div className="bg-[#FF0022] flex flex-col items-center justify-center pt-9 pb-7 rounded-2xl">
                  <div className="flex flex-col items-center text-white">
                    <img src="" alt=" Icon" />
                    <h1 className="pt-4 font-[500] text-[18px] text-center">0</h1>
                    <p className="pt-1 font-[500] text-[14px]">Late Today</p>
                  </div>
                </div>
                <div className="bg-[#005D8F] flex flex-col items-center justify-center pt-9 pb-7 rounded-2xl">
                  <div className="flex flex-col items-center text-white">
                    <img src="" alt=" Icon" />
                    <h1 className="pt-4 font-[500] text-[18px] text-center">0</h1>
                    <p className="pt-1 font-[500] text-[14px]">On Time Today</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance Summary Report */}
            <div className="mt-6">
              <p className="font-medium text-lg pb-3">Attendance Summary Report of the Day</p>
              <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-0 bg-white p-4">
                  <thead className="bg-[#D6D6D6]">
                    <tr className="font-semibold text-gray-700 text-sm md:text-base">
                      {["Department", "Total Employee", "Present", "Absent", "On Time", "Late", "On Leave"].map((heading, index) => (
                        <th key={index} className="border-r border-gray-300 px-4 py-2 text-left">
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 7 }).map((_, index) => (
                      <tr key={index} className="bg-white text-gray-600 font-medium text-sm md:text-base">
                        {Array.from({ length: 7 }).map((_, colIndex) => (
                          <td key={colIndex} className="border-r border-gray-300 px-4 py-2">
                            Row {index + 1}, Col {colIndex + 1}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

      </section>
    </>
  );
}

export default Home;
