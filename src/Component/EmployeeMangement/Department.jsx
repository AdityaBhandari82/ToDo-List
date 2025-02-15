import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaEdit, FaTrash } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Department = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: "Finance" },
    { id: 2, name: "Human Resource" },
    { id: 3, name: "Information Technology" },
    { id: 4, name: "Management" },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentDept, setCurrentDept] = useState(null);
  const [editedName, setEditedName] = useState("");

  // Open modal for editing or adding
  const openModal = (dept = null) => {
    setCurrentDept(dept);
    setEditedName(dept ? dept.name : "");
    setModalIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentDept(null);
  };

  // Handle Save (edit or add department)
  const handleSave = () => {
    if (!editedName) return;

    if (currentDept) {
      setDepartments(
        departments.map(dept => dept.id === currentDept.id ? { ...dept, name: editedName } : dept)
      );
    } else {
      const newDept = { id: departments.length + 1, name: editedName };
      setDepartments([...departments, newDept]);
    }

    closeModal();
  };

  // Handle Delete
  const handleDelete = (id) => {
    setDepartments(departments.filter(dept => dept.id !== id));
  };

  return (
    <section className="bg-sky-100 flex flex-col w-full min-h-screen">
      {/* Header */}
      <div className="h-20 bg-slate-700 flex justify-end items-center px-4">
        <div className="flex items-center space-x-2">
          <p className="text-gray-300 text-lg sm:text-xl">Santosh</p>
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            className="h-12 w-12 sm:h-16 sm:w-16 rounded-full"
            alt="User Profile"
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#DBF2FF] p-6 rounded-lg flex-1">
        <h2 className="text-xl sm:text-2xl font-semibold px-3 mb-4">
          Department
        </h2>

        {/* Input & Buttons */}
        <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row md:items-center gap-4">
          <input
            type="text"
            placeholder="Department Name"
            className="flex-1 border-2 p-3 rounded-md"
          />
          <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Show
            </button>
            <button
              className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-900 transition"
              onClick={() => openModal()}
            >
              Add New
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white mt-10 p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-4">Departments</p>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-300 text-gray-700 text-left">
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6 text-center">Edit</th>
                  <th className="py-3 px-6 text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => (
                  <tr key={dept.id} className="border-b border-gray-200">
                    <td className="py-3 px-6">{dept.name}</td>
                    <td className="py-3 px-6 text-center">
                      <FaEdit
                        className="text-gray-600 cursor-pointer hover:text-blue-600 transition"
                        onClick={() => openModal(dept)}
                      />
                    </td>
                    <td className="py-3 px-6 text-center">
                      <FaTrash
                        className="text-gray-600 cursor-pointer hover:text-red-600 transition"
                        onClick={() => handleDelete(dept.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          {/* Close Button */}
          <RxCross2
            className="absolute top-4 right-4 text-gray-600 cursor-pointer text-2xl hover:text-gray-800 transition"
            onClick={closeModal}
          />

          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            {currentDept ? "Edit Department" : "Add Department"}
          </h2>

          <p className="mb-2">Department</p>
          <select
            className="w-full p-3 border-2 border-gray-300 rounded-md mb-4"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          >
            <option value="">Select a department</option>
            <option value="Finance">Finance</option>
            <option value="Human Resource">Human Resource</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Management">Management</option>
          </select>

          <div className="flex justify-end space-x-3">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Department;





