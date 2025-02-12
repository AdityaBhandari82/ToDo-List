import React from 'react'
import Sidebar from '../Component/Sidebar'


import Payroll from '../Component/Payroll/Payroll'
import Shift from '../Component/Shiftsetup/Shift'
import Employee from '../Component/EmployeeMangement/Employee'
import Report from '../Component/Report/Report'

function Reportpage() {
  return (
    <>
        <div className='flex flex-row bg-sky-100 w-full'>
            <div className='w-3/12'>
                {<Sidebar />}
            </div>
            <div className='w-9/12'>
                <Report/>
            </div>
        </div>
    
    </>
  )
}

export default Reportpage








 



