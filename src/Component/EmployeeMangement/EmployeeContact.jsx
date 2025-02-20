import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const EmployeeContact = () => {
  const [photo, setPhoto] = useState(null);

  const [employeeData, setEmployeeData] = useState({
    email: "",
    homePhone: "",
    workPhone: "",
    emergencyContact: "",
    emergencyPhone: "",
    profileName: "",
    contactImage: null,
  });

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchEmployees = async () => {
          setLoading(true);
          setError(null);
          try {
              const response = await axios.get("http://localhost:8000/website/employeeInfoRoute/employeeinfo");
              if (response.data.status === 1 && response.data.employees) {
                  setEmployees(response.data.employees);
                  console.log("Fetched Employees:", response.data.employees);
              } else {
                  setError("Failed to fetch employee data: " + (response.data.msg || "Unknown error"));
              }
          } catch (err) {
              setError("Error fetching employees: " + err.message);
          } finally {
              setLoading(false);
          }
      };
      fetchEmployees();
  }, []);

  const handleEmployeeSelect = (e) => {
      const selectedEmployeeName = e.target.value;
      setSelectedEmployee(selectedEmployeeName);

      const foundEmployee = employees.find((emp) => emp.name === selectedEmployeeName);

      if (foundEmployee) {
          setEmployeeData({
              ...employeeData,
              profileName: foundEmployee.name,
              contactImage: foundEmployee.profileImage ? `http://localhost:8000/uploads/EmployeeInfoImage/${foundEmployee.profileImage}` : null,
          });
          setPhoto(foundEmployee.profileImage ? `http://localhost:8000/uploads/EmployeeInfoImage/${foundEmployee.profileImage}` : null);
      } else {
          setEmployeeData({
              ...employeeData,
              profileName: "",
              contactImage: null,
          });
          setPhoto(null);
      }
  };


  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setEmployeeData({
        ...employeeData,
        contactImage: e.target.files[0], // Save the file directly in the state
      });
      setPhoto(URL.createObjectURL(e.target.files[0])); // Update preview image
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // Append the form data
    formData.append("email", employeeData.email);
    formData.append("homePhone", employeeData.homePhone);
    formData.append("workPhone", employeeData.workPhone);
    formData.append("emergencyContact", employeeData.emergencyContact);
    formData.append("emergencyPhone", employeeData.emergencyPhone);
    formData.append("contactImage", employeeData.contactImage);

    try {
      const response = await axios.post(
        "http://localhost:8000/website/contactInfoRoute/contactinfo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.status === 1) {
        alert("Employee contact details saved successfully!");
      } else {
        alert("Error saving employee contact details.");
      }
    } catch (error) {
      console.error("Error submitting employee data:", error);
    }
  };

  return (

      <div className="bg-white">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex flex-wrap md:flex-nowrap p-6 rounded-lg gap-6 justify-center">
        <div className=" p-6 rounded-lg  w-full md:w-1/3 flex flex-col items-center">
            <img
              src={photo || (employeeData.contactImage ? employeeData.contactImage : "saira")}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h2 className="mt-4 text-lg font-semibold">{employeeData.profileName}</h2>
            <button type="submit" className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
              Next
            </button>
          </div>

          <div className=" p-6 rounded-lg  w-full md:w-2/3">
            <div className="flex flex-wrap border-b pb-2 mb-4 gap-4 text-center">
              <Link
                to="/employeemanagement/employee_profile"
                className="text-blue-600 font-semibold"
              >
                Employee Info
              </Link>
              <Link 
              to ="/employeemanagement/employee_contact"
              className="font-semibold border-b-2 border-gray-600">
                Contact Info
              </Link>
              <Link 
              to="/employeemanagement/employeement_info"
              className="text-blue-600 font-semibold">
                Employment Info
              </Link>
              <Link 
              to ="/employeemanagement/payroll"
              className="text-blue-600 font-semibold">Payroll</Link>
              <Link 
              to ="/employeemanagement/security"
              className="text-blue-600 font-semibold">Security</Link>
              <Link 
              to ="/employeemanagement/file"
              className="text-blue-600 font-semibold">Files</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={employeeData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Home Phone</label>
                <input
                  type="text"
                  name="homePhone"
                  value={employeeData.homePhone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Work Phone</label>
                <input
                  type="text"
                  name="workPhone"
                  value={employeeData.workPhone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Emergency Contact</label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={employeeData.emergencyContact}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-700">Emergency Phone</label>
                <input
                  type="text"
                  name="emergencyPhone"
                  value={employeeData.emergencyPhone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter emergency phone"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
  );
};

export default EmployeeContact;
