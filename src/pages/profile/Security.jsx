import React from 'react'
import './Security.css';

const Security = () => {
  return (
    <div className='security '>
         <div className='flex justify-between my-2 sub-heading-border '>
            <span className="">Change Password</span>
        </div>
         <div className='flex justify-between my-2 sub-heading-border'>
            <span className="">Enable Two Factor Authentication</span>
        </div>
    </div>
  )
}

export default Security