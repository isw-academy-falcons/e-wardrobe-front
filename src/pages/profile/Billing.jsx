import React from 'react'
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import './Billing.css'

const Billing = () => {
  return (
    <div className='billing mb-4'>
         <div className='border-bottom billing-flex my-2'>
            <span className="text-[12px]">Manage Payment Info</span>
            <KeyboardArrowRight />
        </div>
         <div className='border-bottom billing-flex my-2'>
            <span className="text-[12px]">Payment History</span>
            <KeyboardArrowRight />
        </div>
    </div>
  )
}

export default Billing
