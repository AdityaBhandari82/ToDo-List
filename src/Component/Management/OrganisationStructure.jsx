import React from 'react';
import Header from '../Header';

const OrgCard = ({ name, role, department }) => (
  <div className="bg-sky-400 text-white p-5 rounded-lg w-[150px] h-[133px] text-center shadow-md hover:bg-sky-500 transition-colors text-sm">
    <div className="font-medium p-1">{name}</div>
    <div className="text-xs p-1">{role}</div>
    <div className="text-xs ">{department}</div>
  </div>
);

const OrganisationStructure = () => {
  const managers = [
    { name: "Niadeem ur Rahman", dept: "Human Resource" },
    { name: "Danish ur Khan", dept: "Sales" },
    { name: "Sakshi Kadam", dept: "Information Technology" },
    { name: "Pratiksha Ade", dept: "Finance" }
  ];

  const officers = [
    { name: "Hussanie Khan", dept: "Human Resource", manager: 0 },
    { name: "Saira Khan", dept: "Human Resource", manager: 0 },
    { name: "Pratik Uttan", dept: "Sales", manager: 1 },
    { name: "Ahead Zamne", dept: "Sales", manager: 1 },
    { name: "Varun Ade", dept: "Sales", manager: 1 },
    { name: "Ibad ur Rahman", dept: "Information Technology", manager: 2 },
    { name: "New IT User", dept: "Information Technology", manager: 2 },
    { name: "Amit Jadhav", dept: "Information Technology", manager: 2 },
    { name: "Fida", dept: "Finance", manager: 3 },
    { name: "Niadeem ur Rahman", dept: "Finance", manager: 3 }
  ];

  return (
    <section className="bg-sky-100 flex flex-col w-full min-h-screen overflow-x-auto">
      <Header />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Organization Structure</h1>
        <div className="w-full flex flex-col items-center">
          <div className="relative flex flex-col items-center mb-8">
            <OrgCard name="Sharma" role="(COD)" department="Management" />
            <div className="h-8 w-px bg-gray-500"></div>
          </div>

          <div className="relative flex justify-center gap-12 flex-wrap mb-8">
          <div className="absolute  top-[-32px] h-px bg-gray-500 w-full"> </div>
            {managers.map((manager, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                
                <div className="h-8 w-px absolute top-[-32px] bg-gray-500"></div>
               
                <OrgCard name={manager.name} role="(Manager)" department={manager.dept} />
                <div className="h-8 w-px bg-gray-500"></div>
              </div>
            ))}
          </div>

          <div className="relative flex justify-center gap-4 flex-wrap">
            {managers.map((manager, idx) => {
              const departmentOfficers = officers.filter(o => o.manager === idx);
              return (
                
                <div key={idx} className="relative flex flex-col items-center">
                  <div className="absolute top-[-32px] h-px  bg-gray-500 w-full"></div>
                  <div className="flex gap-4 flex-wrap justify-center">
                    {departmentOfficers.map((officer, officerIdx) => (
                      <div key={officerIdx} className="relative flex flex-col items-center w-24 ">
                        <div className="h-8 absolute top-[-32px] w-px bg-gray-500"></div>
                        <OrgCard  name={officer.name} role="(Officer)" department={officer.dept} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganisationStructure;
