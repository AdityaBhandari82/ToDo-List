import React from 'react'
import Sidebar from '../Component/Sidebar'
import Employee from '../Component/EmployeeMangement/Employee'
import Management from '../Component/Management/Management'

function Managementpage() {
  return (
    <>
        <div className='flex flex-row bg-sky-100 w-full'>
            <div className='w-3/12'>
                {<Sidebar />}
            </div>
            <div className='w-9/12'>
                <Management/>
            </div>
        </div>
    
    </>
  )
}

export default Managementpage








