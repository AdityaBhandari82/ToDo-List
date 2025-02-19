import React, { useState } from 'react';
import Header from '../Header';
import Edit from "../Attendance/images/In.png"
import MissingTimePopup from './MissingTimePopup';

const MyAttendanceReport = () => {
  const [showTable, setShowTable] = useState(false);
  const [openPopupIndex, setOpenPopupIndex] = useState(null);


  const attendanceData = [
    { name: "Ibad ur Rahman", date: "01 Jan", day: "Thu", in: "", out: "5:32 PM", status: "IN Time Update" },
    { name: "Saira Khan", date: "02 Jan", day: "Fri", in: "10:01 AM", out: "8:11 PM", status: "Absent" },
    { name: "Hassan Khan", date: "03 Jan", day: "Sat", in: "", out: "9:30 PM", status: "IN Time Update" },
    { name: "Nadeem Ur Rahman", date: "04 Jan", day: "Sun", in: "8:00 AM", out: "8:00 PM", status: "Absent" },
    { name: "Mithali Ade", date: "05 Jan", day: "Mon", in: "7:01 AM", out: "8:30 PM", status: "Absent" },
    { name: "Ibad ur Rahman", date: "06 Jan", day: "Tue", in: "10:01 AM", out: "8:11 PM", status: "Absent" }
  ];

  const handleShow = () => {
    setShowTable(true);
  };

  return (
    <section className="bg-sky-100 flex flex-col w-full min-h-screen">
      {/* Header */}
     <Header/>

        {/* Main Content */}
        <div className="bg-[#DBF2FF] p-6 rounded-lg flex-1">
          <h1 className="font-medium text-lg">Employee Attendance Report</h1>

          {/* Filter Section */}
          <div className="bg-white p-4 rounded-lg grid grid-cols-1 lg:grid-cols-[80%_auto] mt-8 gap-4 items-center">
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <select className="flex-1 p-2 text-[#292929] text-base font-medium border border-[#292929] focus:outline-none rounded">
                <option>Select Employee</option>
                <option value="deepika">Deepika</option>
                <option value="sam">Sam</option>
                <option value="neha">Neha</option>
              </select>

              <input
                type="date"
                className="flex-1 p-2 border border-[#292929] font-medium focus:outline-none rounded"
                placeholder="From Date"
              />
              <input
                type="date"
                className="flex-1 p-2 text-[#292929] text-base font-medium border border-[#292929] focus:outline-none rounded"
                placeholder="End Date"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleShow}
                className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Show
              </button>
            </div>
          </div>

          {/* Table Section */}
          {showTable && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full bg-white rounded-lg">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-4 text-left font-medium">Name</th>
                    <th className="p-4 text-left font-medium">Date</th>
                    <th className="p-4 text-left font-medium">Day</th>
                    <th className="p-4 text-left font-medium">IN</th>
                    <th className="p-4 text-left font-medium">OUT</th>
                    <th className="p-4 text-left font-medium">Status</th>
                    <th className="p-4 text-left font-medium">Time Adjustment</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-4">{row.name}</td>
                      <td className="p-4">{row.date}</td>
                      <td className="p-4">{row.day}</td>
                      <td className="p-4">{row.in}</td>
                      <td className="p-4">{row.out}</td>
                      <td className="p-4">{row.status}</td>
                      <td className="p-4">
                        <div>
                          {row.status === "IN Time Update" && (
                            <>
                              <button
                                className="text-teal-500"
                                onClick={() => setOpenPopupIndex(index)}
                              >
                                <img src={Edit} alt="edit" className="w-6 h-6" />
                              </button>

                  {openPopupIndex === index && (
                    <MissingTimePopup
                      isOpen={true}
                      onClose={() => setOpenPopupIndex(null)}
                    />
                  )}
                </>
              )}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default AttendanceReport;