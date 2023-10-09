import React from 'react'
import './Security.css';
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Security = () => {
  return (
    <div className='security '>
         <div className='security-flex  my-2 sub-heading-border '>
            <span className="">Change Password</span>
            <KeyboardArrowRight />
        </div>
         <div className='security-flex my-2 sub-heading-border'>
            <span className="">Enable Two Factor Authentication</span>
            <KeyboardArrowRight />
        </div>
    </div>
  )
}

export default Security