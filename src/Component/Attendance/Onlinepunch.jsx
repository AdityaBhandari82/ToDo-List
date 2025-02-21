import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

function Onlinepunch() {
  const [selectedDate, setSelectedDate] = useState(null);

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [formData, setFormData] = useState({
    selectedOption: null,
    startDate: '',
    endDate: '',
  });

  const [punchText, setPunchText] = useState('');

  const handleChange = (event) => {
    setPunchText(event.target.value);
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const { startDate, endDate, selectedOption } = formData;

  const handlePunchIn = async () => {
    const payload = {
      text: punchText,
    };

    try {
      const response = await fetch('http://localhost:8000/punchIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to save punch in data');
      }

      const result = await response.json();
      console.log("Punch In successful:", result);
      setPunchText('');
    } catch (error) {
      console.error('Error sending punch in data:', error);
    }
  };

  return (
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

      <h3 className="mx-4 lg:mx-6">Punch IN Time, OUT Time auto</h3>

      <div className="flex md:flex-row justify-between mx-4 lg:mx-6 rounded-lg my-2 lg:my-4 bg-white px-3 py-1">
        <div className="w-full lg:w-7/12 md:mr-4">
          <input
            type="text"
            value={punchText}
            name="punchText"
            onChange={handleChange}
            className="border w-full rounded-lg border-solid py-1.5 border-black"
            placeholder="Enter text..."
          />
        </div>

        <div className="w-full lg:w-5/12 flex justify-end text-white mt-2 md:mt-0">
          <div className="flex justify-end gap-2 w-full">
            <button
              type="button"
              onClick={handlePunchIn}
              className="px-2 md:px-3 py-1 md:py-2 bg-green-700 lg:text-base rounded-lg"
            >
              Punch In Time
            </button>
            <button
              type="button"
              onClick={handlePunchIn}
              className="px-2 md:px-3 py-1 md:py-2 bg-red-700 text-base rounded-lg"
            >
              Punch Out Time
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-between mx-4 lg:mx-6 rounded-lg my-2 lg:my-4 bg-white px-3 py-1'>
        <h3 className="font-semibold">Punch Time record with From Date, To Date</h3>

        <div className='flex w-full flex-wrap items-center'>
          <div className='w-full md:w-3/12 mb-2 md:mb-0'>
            <Select
              options={options}
              value={selectedOption}
              onChange={(option) =>
                setFormData((prevData) => ({ ...prevData, selectedOption: option }))
              }
              name="selectedOption"
              placeholder="Select Employee"
              className="text-black"
            />
            {selectedOption && (
              <p className="mt-2 text-gray-600">Selected: {selectedOption.label}</p>
            )}
          </div>

          <div className='w-full md:w-3/12 pl-2.5 mb-2 md:mb-0'>
            <input
              type="date"
              value={startDate}
              name='startDate'
              onChange={handleOnChange}
              className="w-full py-1.5 text-gray-600 border border-gray-600 outline-gray-400 rounded-md"
              placeholder="Select start date" />
          </div>

          <div className='w-full md:w-3/12 pl-2.5 mb-2 md:mb-0'>
            <input
              type="date"
              value={endDate}
              name='endDate'
              onChange={handleOnChange}
              className="w-full py-1.5 text-gray-600 border border-gray-600 outline-gray-400 rounded-md"
              placeholder="Select end date" />
          </div>

          <div className="w-full md:w-3/12 flex justify-end">
            <button type="button" className='px-4 py-2 bg-blue-500 text-white rounded-md'>Show</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Onlinepunch;
