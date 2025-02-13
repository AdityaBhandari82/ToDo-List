import React from 'react';
import Header from '../Header';

function PayrollMonths() {
  return (
    <>
      <section className="bg-sky-100 flex flex-col w-full h-screen">
        <Header/>

        <div>
                <div className="mt-2 ml-3 mr-4">
  {/* Heading */}
  <p className="text-[18px] py-2 font-[500] text-[#000000] text-center md:text-left">
    Month Names
  </p>

  {/* Input & Button Section */}
  <div className="bg-white py-[17px] px-[15px] grid grid-cols-1 md:grid-cols-[65%_auto] gap-2 md:gap-4 justify-between rounded-[8px]">
    {/* Input Fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      <input
        placeholder="2023"
        className="border border-[#292929] text-[15px] placeholder-[#696969] focus:outline-none px-[10px] py-[5px] w-full"
      />
      <input
        placeholder="January"
        className="border border-[#292929] text-[15px] placeholder-[#696969] focus:outline-none px-[10px] py-[5px] w-full"
      />
    </div>

    {/* Buttons */}
    <div className="flex flex-col md:flex-row gap-2 md:gap-[10px]">
      <button className="px-[20px] py-[7px] bg-[#00A6FF] text-white text-[15px] font-[600] rounded-[4px] w-full md:w-auto">
        Show
      </button>
      <button className="px-[20px] py-[7px] bg-[#238B82] text-white text-[15px] font-[600] rounded-[4px] w-full md:w-auto">
        Add New
      </button>
    </div>
  </div>

  {/* Month Names Display */}
  <div className="bg-white py-[17px] px-[20px] md:px-[30px] mt-4 rounded-[8px] text-center md:text-left">
    Month Names
  </div>
</div>

                </div>

      </section>
    </>
  );
}

export default PayrollMonths;
 








