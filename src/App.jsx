import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue('');
  };

  const handleDelete = (indexDelete) => {
    setTask((prevTask) => prevTask.filter((_, index) => index !== indexDelete));
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <form onSubmit={handleFormSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Type here"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
            className="flex-1 border rounded bg-orange-200 p-2"
          />
          <button
            className="border rounded px-4 bg-blue-300 hover:bg-blue-400"
            type="submit"
          >
            Add Task
          </button>
        </form>

        <ul className="space-y-2">
          {task.map((curtask, index) => (
            <li key={index} className="flex justify-between items-center bg-orange-100 p-2 rounded">
              <span>{curtask}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
