import React from 'react'
import Sidebar from '../Component/Sidebar'
import PerforMange from '../Component/Performance/PerforMange'

function Perfor_mangpage() {
  return (
    <>
        <div className='flex flex-row bg-sky-100 w-full'>
            <div className='w-3/12'>
                {<Sidebar />}
            </div>
            <div className='w-9/12'>
                <PerforMange/>
            </div>
        </div>
    
    </>
  )
}

export default Perfor_mangpage








 



