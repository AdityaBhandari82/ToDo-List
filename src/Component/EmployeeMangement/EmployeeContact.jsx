import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeContact = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className='bg-[#DBF2FF] p-6 min-h-screen'>
      <h1 className='font-bold text-lg sm:text-xl'>Employee Info</h1>
      
      <div className="bg-white p-4 rounded-lg flex flex-wrap gap-4 items-center justify-between mt-3">
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <select className="w-full md:w-60 p-2 text-gray-600 border-2 border-gray-600 outline-gray-400 rounded-md">
            <option>Select Department</option>
            <option value="hr">Officer</option>
            <option value="it">Jn. Officer</option>
            <option value="finance">Manager</option>
          </select>
          
          <select className="w-full md:w-60 p-2 border-2 text-gray-600 border-gray-600 outline-gray-400 rounded-md">
            <option>Select Employee</option>
            <option value="paid leave">Saira Khan</option>
            <option value="unpaid leave">Hassan Khan</option>
            <option value="voluntary leave">Nadeem Ur Rahman</option>
            <option value="voluntary leave">Mithali Ade</option>
          </select>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto justify-center md:justify-start">
          <button className="bg-blue-400 text-white px-4 py-2 rounded">Show</button>
          <button className="bg-green-700 text-white px-4 py-2 rounded">Add New</button>
          <button className="bg-red-700 text-white px-4 py-2 rounded">Import</button>
        </div>
      </div>
      
      <div className="flex flex-wrap md:flex-nowrap p-6 rounded-lg gap-6 justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 flex flex-col items-center">
          <img src={photo || 'saira'} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
          <h2 className="mt-4 text-lg font-semibold">Saira Khan</h2>
          <input type="file" onChange={handlePhotoChange} className="hidden" id="photoUpload" />
          <label htmlFor="photoUpload" className="mt-2 bg-gray-200 px-4 py-2 rounded cursor-pointer">
            Browse
          </label>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Update</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
          <div className="flex flex-wrap border-b pb-2 mb-4 gap-4 text-center">
            <Link to="/employeemanagement/employee_contact" className="text-blue-600 font-semibold">Employee Info</Link>
            <span className="font-semibold border-b-2 border-gray-600">Contact Info</span>
            <span className="text-blue-600 font-semibold">Employment Info</span>
            <span className="text-blue-600 font-semibold">Payroll</span>
            <span className="text-blue-600 font-semibold">Security</span>
            <span className="text-blue-600 font-semibold">Files</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" value="SairaKhan@hrworld.org.pk" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Home Phone</label>
              <input type="text" value="067-98768867" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Work Phone</label>
              <input type="text" value="5674-3452-890" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Emergency Contact</label>
              <input type="text" value="0774-3455211" className="w-full p-2 border rounded" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700">Emergency Phone</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter emergency phone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeContact