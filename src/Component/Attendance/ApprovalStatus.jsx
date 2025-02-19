import React from 'react';
import Calender from "./Calender"
function ApprovalStatus() {
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
        <h3 className=''>Transaction Status Report </h3>
        <div className="flex flex-row justify-between mx-4 lg:mx-6 rounded-lg my-2 lg:my-4 bg-white px-3 py-1">
        <div className="flex flex-row gap-2">
        <input type="date"  className="p-2 border-2 border-gray-600 outline-gray-400 text-gray-600 rounded-md w-40 lg:w-60" placeholderText="From date" />
        <input type="date"  className="p-2 border-2 border-gray-600 outline-gray-400 text-gray-600 rounded-md w-40 lg:w-60" placeholderText="To date" />
        </div>
        <div>
            <button className='px-3 py-2 rounded-lg text-white bg-blue-500'>show </button>
        </div>
        </div>
        <section className='bg-white rounded mx-4 lg:mx-6 my-2 lg:my-4 flex flex-col px-3 py-1'>
            <h5 className='text-lg font-semibold'>leaves</h5>
            <div className="p-2 flex w-full rounded-lg mt-2 bg-gray-300">
                <div className='w-5/12 flex-row flex'>
                    <div className='w-full flex flex-row'>
                        <div className='w-3/12 '>
                            <p className='font-semibold text-base'>Date</p>
                        </div>
                        <div className='w-4/12'>
                            <p className='font-semibold text-base'>Leave Name</p>
                        </div>
                        <div className=' w-3/12'>
                            <p className='font-semibold text-base'>Leave</p>
                        </div>
                        <div className='w-2/12'>
                            <p className='font-semibold text-base'>Reason</p>
                        </div>  
                    </div>
                </div>
                <div className='w-7/12'>
                    <div className='w-full flex flex-row'>
                        <div className='w-6/12'>
                        <p className='font-semibold text-base pl-3'>HOD Remark</p>
                        </div>
                        <div className='w-2/12'>
                        <p className='font-semibold text-base'>HOD</p>
                        </div>
                        <div className='w-1/12'>
                        <p className='font-semibold text-base'>HR</p>
                        </div>
                        <div className='w-1/12'>
                        <p className='font-semibold text-base'>COD</p>
                        </div>
                        <div className='w-2/12'>
                        <p className='font-semibold text-base'>Rejected</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2 flex w-full rounded-lg mt-2 border border-solid border-black">
                <div className='w-5/12 flex-row flex'>
                    <div className='w-full flex flex-row'>
                        <div className='w-3/12 '>
                            <p className=' text-base'>2/1/12</p>
                        </div>
                        <div className='w-4/12'>
                            <p className=' text-base'>Siter marrage</p>
                        </div>
                        <div className=' w-3/12'>
                            <p className=' text-base'>full day</p>
                        </div>
                        <div className='w-2/12'>
                            <p className=' text-base'>Reason</p>
                        </div>
                    </div>
                </div>
                <div className='w-7/12'>
                    <div className='w-full flex flex-row'>
                        <div className='w-6/12'>    
                        </div>
                        <div className='w-2/12'>
                        <input type="checkbox" />
                        </div>
                        <div className='w-1/12'>
                        <input type="checkbox" />
                        </div>
                        <div className='w-1/12'>
                        <input type="checkbox" />
                        </div>
                        <div className='w-2/12'>
                        <input type="checkbox" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </section>
    </>
  );
}


export default ApprovalStatus;




