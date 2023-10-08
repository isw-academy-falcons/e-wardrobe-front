import React from 'react'
import './Billing.css'

const Billing = () => {
  return (
    <div className='billing mb-4'>
         <div className='border-bottom flex justify-between my-2'>
            <span className="text-[12px]">Manage Payment Info</span>
        </div>
         <div className='border-bottom flex justify-between my-2'>
            <span className="text-[12px]">Payment History</span>
        </div>
    </div>
  )
}

export default Billing
