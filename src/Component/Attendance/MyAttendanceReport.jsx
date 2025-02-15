import React from 'react';

function MyAttendanceReport() {
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

        <div>
      <section className="bg-sky-100 flex flex-col w-full h-screen">
        

        <div className="bg-[#DBF2FF] p-6 rounded-lg min-h-screen">
      <h1 className='font-[500] text-[18px] '>Employee Attendance Repor</h1>

      <div className="bg-white p-4 rounded-lg grid grid-cols-[80%_auto] mt-8 gap-4 items-center">
  {/* Left section with inputs */}
  <div className="flex  gap-2 w-full">
    {/* Select Dropdown */}
    <select className="flex-1 p-2 text-[#292929] text-[16px] font-[500] border-[1px] border-[#292929] focus:outline-none  rounded-[4px]" aria-label="Select Department">
      <option>Select Employee</option>
      <option value="hr">HR</option>
      <option value="it">IT</option>
      <option value="finance">Finance</option>
    </select>

   {/* Start Date Input */}
<input
  type="date"
  className="flex-1 p-2  border-[1px] border-[#292929] font-[500] focus:outline-nonefocus:outline-none rounded-[4px]"
  value=""
  onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => (e.target.value === "" ? (e.target.type = "text", e.target.placeholder = "From Date") : null)}
  placeholder="From Date"
/>

{/* End Date Input */}
<input
  type="date"
  className="flex-1 p-2 text-[#292929] text-[16px] font-[500] border-[1px] border-[#292929] focus:outline-none  rounded-[4px]"
  value=""
  onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => (e.target.value === "" ? (e.target.type = "text", e.target.placeholder = "End Date") : null)}
  placeholder="End Date"
/>


  </div>

  {/* Right section with Button */}
  <div className="flex justify-end">
    <button className="bg-blue-500 text-white px-8 py-2 rounded-md">Show</button>
  </div>
</div>


    </div>

      </section>
    </div>

      </section>
    </>
  );
}

export default MyAttendanceReport;


























