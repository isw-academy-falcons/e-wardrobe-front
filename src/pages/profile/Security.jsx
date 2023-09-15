import React from 'react'
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import './Security.css';

const Security = () => {
  return (
    <div className='security '>
         <div className='flex justify-between my-2'>
            <span className="">Change Password</span>
            <span className='cursor-pointer'><KeyboardArrowRight /></span>
        </div>
         <div className='flex justify-between my-2'>
            <span className="">Enable Two Factor Authentication</span>
            <span className='cursor-pointer'><KeyboardArrowRight /></span>
        </div>
    </div>
  )
}

export default Security