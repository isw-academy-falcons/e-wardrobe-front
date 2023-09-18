import React from 'react'
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import './Billing.css'

const Billing = () => {
  return (
    <div className='billing '>
         <div className='border-bottom flex justify-between my-2'>
            <span className="">Manage Payment Info</span>
            <span className='cursor-pointer'><KeyboardArrowRight /></span>
        </div>
         <div className='border-bottom flex justify-between my-2'>
            <span className="">Payment History</span>
            <span className='cursor-pointer'><KeyboardArrowRight /></span>
        </div>
    </div>
  )
}

export default Billing
