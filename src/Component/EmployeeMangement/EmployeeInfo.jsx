import React, { useState } from "react";
import axios from "axios";
import {  FaUserEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


function EmployeeInfo() {
  const [selectedDate, setSelectedDate] = useState("");
  const dates = ["2000-01-01", "1995-05-20", "1998-10-15", "2002-07-30", "1990-12-10"];
  const [selectedGender, setSelectedGender] = useState("");
  const genders = ["Male", "Female", "Other"]; 

  const [activeModal, setActiveModal] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    department: "",
    empCode: "",
    email: "",
    authority: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    machineCode: "",
    image: null,
  });

  const [employeeData, setEmployeeData] = useState({
    hiredate: "",
    joiningdate: "",
    basicsalary: "",
    status: "",
    paymentMethod: "",
    employeeType: "",
    bankName: "",
    branch: "",
    accountTitle: "",
    branchCode: "",
    accountNo: "",
    swiftCode: "",
    location: "",
    designation: "",
    department: "",
    cnic: "",
    employeeCode: "",
    separationDate: "",
  });

  const handleImageUpload = (e) => {
    setNewEmployee((prev) => ({
      ...prev,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/website/employementInfoRoute/employementInfo",
        employeeData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      alert(response.data.status === 1 ? "Employee details saved!" : "Error saving details.");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderModal = () => {
    if (!activeModal) return null;

    function handleFilter() {
      return dates.filter(date => date === selectedDate);
    }

    function handleFilter() {
      if (typeof selectedGender !== "string") {
        return "Invalid input";
      }
      for (let i = 0; i < genders.length; i++) {
        if (genders[i] === selectedGender) {
          return genders[i];
        }
      }
      return "No match found";
    }

    const modalContent = {
      employee: (
        <div className="flex flex-col sm:flex-row gap-6">
  
  <div className="flex flex-col items-center w-full sm:w-1/3 border-2 p-4 rounded-lg shadow-md">
    <img 
      src={newEmployee.image || "https://via.placeholder.com/100"} 
      alt="Profile" 
      className="w-24 h-24 rounded-full border"
    />
    <input 
      type="file" 
      className="mt-4 border rounded-xl p-2 text-sm w-full"
      onChange={handleImageUpload} 
    />
    <button 
      type="submit" 
      className="bg-green-700 text-white px-4 py-2 rounded mt-6 w-full sm:w-auto"
    >
      Next
    </button>
  </div>

  
  <div className="w-full sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input 
      type="text" 
      name="name" 
      placeholder="Name" 
      className="p-2 border rounded w-full focus:ring-2 focus:ring-blue-500"
      onChange={handleChange} 
    />
    <input 
      type="text" 
      name="role" 
      placeholder="Role" 
      className="p-2 border rounded w-full focus:ring-2 focus:ring-blue-500"
      onChange={handleChange} 
    />

    
    <div>
      <label className="text-sm font-medium">Date of Birth</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border p-2 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    
    <div>
      <label className="text-sm font-medium">Gender</label>
      <select
        value={selectedGender}
        onChange={(e) => setSelectedGender(e.target.value)}
        className="border p-2 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <input 
      type="text" 
      name="city" 
      placeholder="City" 
      className="p-2 border rounded w-full focus:ring-2 focus:ring-blue-500"
      onChange={handleChange} 
    />
    <input 
      type="text" 
      name="country" 
      placeholder="Country" 
      className="p-2 border rounded w-full focus:ring-2 focus:ring-blue-500"
      onChange={handleChange} 
    />
    <input 
      type="text" 
      name="postalCode" 
      placeholder="Postal Code" 
      className="p-2 border rounded w-full focus:ring-2 focus:ring-blue-500"
      onChange={handleChange} 
    />
  </div>
</div>

        
      ),
      contact: (
        <div className="flex flex-col sm:flex-row gap-6">
      
        <div className="flex flex-col items-center w-full sm:w-1/3 border-2 p-3 rounded-lg shadow-md">
          <img 
            src={newEmployee.image || "https://via.placeholder.com/100"} 
            alt="Profile" 
            className="w-24 h-24 rounded-full border"
          />
          <input 
            type="file" 
            className="mt-4 border rounded-xl p-2 text-sm w-full"
            onChange={handleImageUpload} 
          />
          <button 
            type="submit" 
            className="bg-green-700 text-white px-4 py-2 rounded mt-6 w-full sm:w-auto"
          >
            Next
          </button>
        </div>
      
        
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="homePhone" 
            placeholder="Home Phone" 
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="workPhone" 
            placeholder="Work Phone" 
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="emergencyPhone" 
            placeholder="Emergency Phone" 
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="emergencyContact" 
            placeholder="Emergency Contact" 
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} 
          />
        </form>
      </div>
      
      ),
      employment: (
<div className="flex flex-col sm:flex-row gap-6">
  <div className="flex flex-col items-center w-full sm:w-1/3 border-2 p-4 rounded-lg shadow-md">
    <img 
      src={newEmployee.image || "https://via.placeholder.com/100"} 
      alt="Profile" 
      className="w-24 h-24 rounded-full border"
    />
    <input 
      type="file" 
      className="mt-4 border rounded-xl p-2 text-sm w-full"
      onChange={handleImageUpload} 
    />
    <button 
      type="submit" 
      className="bg-green-700 text-white px-4 py-2 rounded mt-6 w-full sm:w-auto"
    >
      Next
    </button>
  </div>

  <form onSubmit={handleSubmit} className="w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[
        "Hire Date", "Joining Date", "Basic Salary", "Status", "Payment Method", 
        "Employee Type", "Bank Name", "Branch", "Account Title", "Branch Code", 
        "Account No", "Swift Code", "Location", "Designation", "Department", 
        "CNIC", "Employee Code", "Separation Date"
      ].map((label, index) => {
        const name = label.toLowerCase().replace(/\s+/g, "");
        return (
          <div key={index} className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">{label}</label>
            <input 
              type="text" 
              name={name} 
              value={employeeData[name]} 
              onChange={handleChange} 
              className="border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400 w-full"
            />
          </div>
        );
      })}
    </div>
  </form>
</div>

      ),
      payroll: (

<div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col items-center w-full sm:w-1/3 border-2 p-3 rounded">
            <img src={newEmployee.image || "https://via.placeholder.com/100"} alt="Profile" className="w-24 h-24 rounded-full border" />
            <input type="file" className="mt-4 border rounded-xl p-2 text-sm w-full" onChange={handleImageUpload} />
           <Link to="/security"> <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded mt-8">Next</button></Link>

          </div>
        <div>
          
          <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">PF</h3>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Type</label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500">
              <option>Select</option>
              <option>Type 1</option>
              <option>Type 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Employee Contribution</label>
            <input
              type="text"
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Employer Contribution</label>
            <input
              type="text"
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">SSES</h3>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Type</label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500">
              <option>Select</option>
              <option>Type 1</option>
              <option>Type 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Employee Contribution</label>
            <input
              type="text"
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Employer Contribution</label>
            <input
              type="text"
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">EOBI</h3>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Type</label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500">
              <option>Select</option>
              <option>Type 1</option>
              <option>Type 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Employee Contribution</label>
            <input
              type="text"
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Employer Contribution</label>
            <input
              type="text"
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        </div>
      </div>


        </div>
      ),
      security: (
        <div className="flex flex-col sm:flex-row gap-6">
  <div className="flex flex-col items-center w-full sm:w-1/3 border-2 p-4 rounded-lg shadow-md">
    <img 
      src={newEmployee.image || "https://via.placeholder.com/100"} 
      alt="Profile" 
      className="w-24 h-24 rounded-full border"
    />
    <input 
      type="file" 
      className="mt-4 border rounded-xl p-2 text-sm w-full"
      onChange={handleImageUpload} 
    />
    <button 
      type="submit" 
      className="bg-green-700 text-white px-4 py-2 rounded mt-6 w-full sm:w-auto"
    >
      Next
    </button>
  </div>

  <div className="w-full sm:w-2/3">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm text-gray-600 mb-1">Security Role</label>
        <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500">
          <option>Select</option>
          <option>Type 1</option>
          <option>Type 2</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Leave Entry Days</label>
        <input
          type="text"
          placeholder="Enter amount"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Password</label>
        <input
          type="password"
          placeholder="********"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div className="p-5">
      <h2 className="text-lg font-semibold mb-3">Record Level Authority</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="w-4 h-4" /> <span>HR</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="w-4 h-4" /> <span>HOD</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="w-4 h-4" /> <span>COD</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="w-4 h-4" /> <span>SECONDIN</span>
        </label>
      </div>
    </div>
  </div>
</div>
      ),
      files: (
        <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col items-center w-full sm:w-1/3 border-2 p-3 rounded">
        <img src={newEmployee.image || "https://via.placeholder.com/100"} alt="pic" className="w-24 h-24 rounded-full border" />
        <input type="file" className="mt-4 border rounded-xl p-2 text-sm w-full" onChange={handleImageUpload} />
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded mt-8">Next</button>

      </div>
        <div>
          <h2 className="text-lg font-bold">Choose File</h2>
          <input type="file" placeholder="browser" className="mt-4 border rounded-xl p-2 text-sm w-full" />
        </div></div>
      ),
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
        <div className="bg-white p-6 rounded-lg w-full max-w-3xl flex flex-col">
          <div className="flex flex-wrap gap-4 border-b pb-2 mb-4 justify-center sm:justify-start">
            {Object.keys(modalContent).map((tab) => (
              <button key={tab} className={`text-gray-700 font-semibold hover:text-blue-600 ${activeModal === tab ? "underline" : ""}`} onClick={() => setActiveModal(tab)}>
                
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Info
              </button>
            ))}
          </div>
          {modalContent[activeModal]}
        </div>
      </div>

    );
  };

  return (
    <div className="bg-[#DBF2FF] min-h-screen p-6">
      <h1 className="font-bold text-xl">Employee Info</h1>

      <div className="bg-white p-4 rounded-lg flex flex-wrap mt-5 gap-4 items-center justify-between">

      <div className="flex flex-wrap gap-4 w-full sm:w-auto">

      <select className="w-full sm:w-60 p-2 border-2 text-gray-600 border-gray-600 outline-gray-400 rounded-md">
            <option>Select Employee</option>
            <option value="paid leave">Saira Khan</option>
            <option value="unpaid leave">Hasaan Khan</option>
            <option value="voluntary leave">Nadeem Ur Rahman</option>
            <option value="voluntary leave">Mithali Ade</option>
          </select>
</div>
<div className="flex flex-wrap gap-3 w-full sm:w-auto">

      <button className="bg-blue-800 text-white px-4 py-2  rounded">Show</button>
      <button className="bg-green-700 text-white px-4 py-2 border rounded " onClick={() => setActiveModal("employee")}>Add New</button>
      {renderModal()}
      </div>


    </div>




    <div className="overflow-x-auto mt-4 rounded">
       
    <div className="p-4">
      <table className="w-full  rounded-xl border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Department</th>
            <th className="border p-2">Emp Code</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Authority</th>

            <th className="border p-2">Edit</th>
            <th className="border p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-100">
            <td className="border p-2 flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Saira Khan"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Saira Khan</p>
                <p className="text-gray-500 text-sm">Officer</p>
                <p className="text-blue-600 text-sm">Human Resource</p>
              </div>
            </td>
            <td className="border p-2 text-center">10000223</td>
            <td className="border p-2 text-center">SairaKhan@hrworld.org.pk</td>
            <td className="border p-2 text-center">Normal</td>
            
            <td className="border p-2 text-center cursor-pointer" onClick={() => setActiveModal("employee")}>
            <FaUserEdit className="mx-auto" />

            </td>
            <td className="border p-2 text-center cuesor-pointer">
            <FaTrashAlt className="mx-auto" />

            </td>
          </tr>


          <tr className="bg-blue-100">
            <td className="border p-2 flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Saira Khan"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Hassan  Khan</p>
                <p className="text-gray-500 text-sm">Officer</p>
                <p className="text-blue-600 text-sm">Human Resource</p>
              </div>
            </td>
            <td className="border p-2 text-center">10000223</td>
            <td className="border p-2 text-center">hassanKhan@hrworld.org.pk</td>
            <td className="border p-2 text-center">Normal</td>
            
            <td className="border p-2 text-center" onClick={() => setActiveModal("employee")}>
            <FaUserEdit className="mx-auto" />

            </td>
            <td className="border p-2 text-center cursor-pointer">
            <FaTrashAlt className="mx-auto" />

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  
          </div>
       
       
    </div>
  );
}

export default EmployeeInfo;
