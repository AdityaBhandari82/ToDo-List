import React from 'react';
import Header from '../Header';

function GazettedHoliday() {
  return (
    <>
      <section className="bg-sky-100 flex flex-col w-full h-screen">
        <Header/>

      

        <div className="bg-[#DBF2FF] p-6 rounded-lg min-h-screen">
      <h1 className='mb-3 font-semibold text-xl text-center md:text-left'>Gazetted Holidays</h1>
      
      <div className="bg-white p-5 rounded flex flex-wrap items-center justify-center md:justify-between gap-5">
        <div className="flex-1 w-full md:w-auto">
          <input 
            type="text" placeholder="Name"
            className="p-3 border-2 border-gray-600 outline-gray-400 text-gray-600 rounded-md w-full md:w-96"/>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto justify-center md:justify-start">
          <button className="bg-blue-400 text-white px-4 py-2 rounded w-full md:w-auto">Show</button>
          <button className="bg-green-700 text-white px-4 py-2 rounded w-full md:w-auto">Add New</button>
        </div>
      </div>
      
      <h1 className='bg-white p-5 my-3 rounded font-semibold text-center md:text-left'>Gazetted Holidays</h1>
      
      <div className="flex justify-center md:justify-start">
        
      </div>
    </div>

      </section>

      
    </>
  );
}

export default GazettedHoliday ;
 



