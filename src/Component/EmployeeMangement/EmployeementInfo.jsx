import React, { useState , useEffect } from "react";
import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";


function EmployeeInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEmploymentModalOpen, setIsEmploymentModalOpen] = useState(false);


  const [employees, setEmployees] = useState([
    {
      name: "Saira Khan",
      role: "Officer",
      department: "Human Resource",
      empCode: "10000223",
      email: "SairaKhan@hrworld.org.pk",
      authority: "Normal",
      gender: "Female",
      dob: "1990-05-12",
      address: "House No: 43, Street No: 11",
      city: "Mumbai",
      postalCode: "400001",
      country: "India",
      machineCode: "MC-00123",
      image: "https://via.placeholder.com/100",
    },
  ]);

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


  const handleImageUpload = (e) => {
    setNewEmployee((prev) => ({
      ...prev,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const addEmployee = () => {
    setEmployees([...employees, newEmployee]);
    setIsModalOpen(false);
    setNewEmployee({
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
    setIsEmploymentModalOpen(true);
  };

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
    departmentSelection: "",
    employeeSelection: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/website/employementInfoRoute/employementInfo",
        employeeData,{
          "Content-Type": "application/json", // Ensure JSON format

        }
      );
      if (response.data.status === 1) {
        alert("Employee details saved successfully!");
      } else {
        alert("Error saving employee details.");
      }
    } catch (error) {
      console.error("Error submitting employee data:", error);
    }
  };




  return (
    <div className="bg-[#DBF2FF] min-h-screen p-6">
      <h1 className="font-bold text-xl">Employee Info</h1>
      <div className="bg-white p-4 rounded-lg flex justify-between mt-5">
      <button
          className="bg-blue-700 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Show
        </button>
        <button
          className="bg-green-700 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add New
        </button>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-3xl flex flex-col">
            <div className="flex flex-wrap gap-4 border-b pb-2 mb-4 justify-center sm:justify-start">
              <NavLink to="/" className="text-gray-700 font-semibold hover:text-blue-600">
                Employee Info
              </NavLink>
             
        <button
          className="text-gray-700 font-semibold hover:text-blue-600"
          onClick={() => setIsContactModalOpen(true)}
        >
           ContactInfo 
        </button>
              <NavLink to="/employment" className="text-gray-700 font-semibold hover:text-blue-600" onClick={() => setIsEmploymentModalOpen(true)}>
                Employment Info
              </NavLink>
              <NavLink to="/payroll" className="text-gray-700 font-semibold hover:text-blue-600">
                Payroll
              </NavLink>
              <NavLink to="/security" className="text-gray-700 font-semibold hover:text-blue-600">
                Security
              </NavLink>
              <NavLink to="/files" className="text-gray-700 font-semibold hover:text-blue-600">
                Files
              </NavLink>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col items-center w-full sm:w-1/3 border p-3 rounded">
                <img
                  src={newEmployee.image || "https://via.placeholder.com/100"}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border"
                />
                <input type="file" className="mt-4 border p-2 text-sm w-full" onChange={handleImageUpload} />
              </div>

              <div className="w-full sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Name" className="p-2 border rounded w-full" onChange={handleChange} />
                <input type="text" name="role" placeholder="Role" className="p-2 border rounded w-full" onChange={handleChange} />
                <input type="text" name="department" placeholder="Department" className="p-2 border rounded w-full" onChange={handleChange} />
                <input type="text" name="machineCode" placeholder="Machine Code" className="p-2 border rounded w-full" onChange={handleChange} />
                <input type="date" name="dob" placeholder="Date of Birth" className="p-2 border rounded w-full" onChange={handleChange} />
                <div className="flex items-center gap-2 flex-wrap">
                  <label className="text-gray-700">Gender:</label>
                  <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
                  <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
                  <label><input type="radio" name="gender" value="None" onChange={handleChange} /> None</label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-4">
              <button className="bg-green-700 text-white px-4 py-2 rounded" onClick={addEmployee}>Next</button>
            </div>
          </div>
        </div>
      )}

      {/* contact */}

{isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-3xl flex flex-col">
            <h2 className="text-xl font-bold mb-4">Contact Info</h2>
            <div className="flex flex-wrap gap-4 border-b pb-2 mb-4 justify-center sm:justify-start">
              <NavLink to="/" className="text-gray-700 font-semibold hover:text-blue-600">
                Employee Info
              </NavLink>
             
        <button
          className="text-gray-700 font-semibold hover:text-blue-600"
          onClick={() => setIsContactModalOpen(true)}
        >
           ContactInfo 
        </button>
              <NavLink to="/employment" className="text-gray-700 font-semibold hover:text-blue-600" onClick={() => setIsEmploymentModalOpen(true)}>
                Employment Info
              </NavLink>
              <NavLink to="/payroll" className="text-gray-700 font-semibold hover:text-blue-600">
                Payroll
              </NavLink>
              <NavLink to="/security" className="text-gray-700 font-semibold hover:text-blue-600">
                Security
              </NavLink>
              <NavLink to="/files" className="text-gray-700 font-semibold hover:text-blue-600">
                Files
              </NavLink>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 ">
            <div className="flex flex-col items-center w-full sm:w-1/3 border p-3 rounded">
                <img
                  src={newEmployee.image || "https://via.placeholder.com/100"}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border"
                />
                <input type="file" className="mt-4 border p-2 text-sm w-full" onChange={handleImageUpload} />
              </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email" className="p-2 border rounded w-full" onChange={(e) => setEmployeeData({...employeeData, email: e.target.value})} />
              <input type="text" name="homePhone" placeholder="Home Phone" className="p-2 border rounded w-full" onChange={(e) => setEmployeeData({...employeeData, homePhone: e.target.value})} />
              <input type="text" name="workPhone" placeholder="Work Phone" className="p-2 border rounded w-full" onChange={(e) => setEmployeeData({...employeeData, workPhone: e.target.value})} />
              <input type="text" name="emergencyContact" placeholder="Emergency Contact" className="p-2 border rounded w-full" onChange={(e) => setEmployeeData({...employeeData, emergencyContact: e.target.value})} />
              <input type="text" name="emergencyPhone" placeholder="Emergency Phone" className="p-2 border rounded w-full" onChange={(e) => setEmployeeData({...employeeData, emergencyPhone: e.target.value})} />
            </form>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button className="bg-green-700 text-white px-4 py-2 rounded">Next</button>
            </div>
            
          </div>
        </div>
      )}

{/* employeementinfo */}
{isEmploymentModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
    <div className="bg-white p-6 rounded-lg w-full max-w-3xl flex flex-col">
      <h2 className="text-xl font-bold mb-4">Employment Info</h2>
      <div className="flex flex-wrap gap-4 border-b pb-2 mb-4 justify-center sm:justify-start">
        <NavLink to="/" className="text-gray-700 font-semibold hover:text-blue-600">
          Employee Info
        </NavLink>

        <button
          className="text-gray-700 font-semibold hover:text-blue-600"
                >
          Contact Info
        </button>
        <button
  className="text-gray-700 font-semibold hover:text-blue-600"
  onClick={() => setIsEmploymentModalOpen(true)}
>
  Employment Info
</button>

        
        <NavLink to="/payroll" className="text-gray-700 font-semibold hover:text-blue-600">
          Payroll
        </NavLink>
        <NavLink to="/security" className="text-gray-700 font-semibold hover:text-blue-600">
          Security
        </NavLink>
        <NavLink to="/files" className="text-gray-700 font-semibold hover:text-blue-600">
          Files
        </NavLink>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="p-3">
          <div className="flex flex-col md:flex-row mt-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
              <img
                src="/placeholder.png"
                alt="Profile"
                className="rounded-full mx-auto w-32 h-32"
              />
              <h3 className="font-semibold mt-2">Employee Name</h3>
              <input
                type="file"
                className="mt-4 border p-2 w-full rounded-md"
              />
             
            </div>

            <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg border w-full">
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {[
                  { label: "Hire Date", name: "hiredate" },
                  { label: "Joining Date", name: "joiningdate" },
                  { label: "Basic Salary", name: "basicsalary" },
                  { label: "Status", name: "status" },
                  { label: "Payment Method", name: "paymentMethod" },
                  { label: "Employee Type", name: "employeeType" },
                  { label: "Bank Name", name: "bankName" },
                  { label: "Branch", name: "branch" },
                  { label: "Account Title", name: "accountTitle" },
                  { label: "Branch Code", name: "branchCode" },
                  { label: "Account No", name: "accountNo" },
                  { label: "Swift Code", name: "swiftCode" },
                  { label: "Location", name: "location" },
                  { label: "Designation", name: "designation" },
                  { label: "Department", name: "department" },
                  { label: "CNIC", name: "cnic" },
                  { label: "Employee Code", name: "employeeCode" },
                  { label: "Separation Date", name: "separationDate" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">
                      {item.label}
                    </label>
                    <input
                      type="text"
                      name={item.name}
                      value={employeeData[item.name]} // Controlled input
                      onChange={handleChange}
                      className="border border-black px-2 py-1 rounded w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="flex justify-end gap-3 mt-4">
        <button className="bg-green-700 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  </div>
)}


    </div>
  );
}

export default EmployeeInfo;