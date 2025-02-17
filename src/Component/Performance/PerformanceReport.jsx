import React from 'react'
// import img1 from '../assets/Vector1.png'

function PerformanceReport() {
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
        <div className="bg-[#DBF2FF] p-6 rounded-lg min-h-screen">
      <h2 className="text-2xl font-semibold px-3 mb-4">Performance Report</h2>
      <div className="bg-white p-4 rounded-lg flex flex-wrap mt-8  gap-4 items-center">
        <select className="w-60 md:w-64 p-2 text-gray-600 border-2 border-gray-600 outline-gray-400 rounded-md">
          <option>Select Department</option>
          <option value="hr">HR</option>
          <option value="it">IT</option>
          <option value="finance">Finance</option>
        </select>
        
        <select className="w-60 md:w-64 p-2 border-2 text-gray-600 border-gray-600 outline-gray-400 rounded-md">
          <option>Select Employee</option>
          <option value="john">John Doe</option>
          <option value="jane">Jane Smith</option>
        </select>
        
        
        
        
        
        
        
        <button className="bg-blue-500 text-white px-8 py-2 lg:ml-85 rounded-md ">Show</button>
        <img src="" alt="" className="bg-gray-200 p-2  ml-3 rounded"/>

        
      </div>
      <div className='bg-white mt-5 rounded-md p-10'>
        <h1 className='font-semibold px-2'>Performance Report of Ibad ur Rahman</h1>
        <p className='bg-gray-300 mt-5 p-4 rounded-md'>No Record Found !</p>
      </div>
      
      
      
    </div>

      </section>
    </>
  )
}

export default PerformanceReport;