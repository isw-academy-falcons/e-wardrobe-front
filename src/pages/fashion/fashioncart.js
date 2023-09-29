import React from 'react'
import men1Image from "../../assets/images/fashion/fashion-men/men1.svg";
import "./fashioncart.css";
import AppNavBar from "../../components/AppNavBar";

const fashioncart = () => {
  return (
    <div>
         <AppNavBar />
        <h1 className='cart-header'>My Cart</h1>

        <div className='cart-product-container'>
        <div className='cart-container-display'>
            <div>
                <img className="cart-image" src={men1Image} alt="SVG" />
            </div>
            <div>
                <h3>Afendi Shirt</h3>
                <p>Quantity: 2</p>
                <p>$321</p>
                <button className="" >Delete</button>
            </div>
        </div>


        <div className='cart-container-display'>
            <div>
                <img className="cart-image" src={men1Image} alt="SVG" />
            </div>
            <div>
                <h3>Afendi Shirt</h3>
                <p>Quantity: 2</p>
                <p>$321</p>
                <button className="" >Delete</button>
            </div>
        </div>

        <div className='cart-container-display'>
            <div>
                <img className="cart-image" src={men1Image} alt="SVG" />
            </div>
            <div>
                <h3>Afendi Shirt</h3>
                <p>Quantity: 2</p>
                <p>$321</p>
                <button className="" >Delete</button>
            </div>
        </div>


        <div className='cart-container-display'>
            <div>
                <img className="cart-image" src={men1Image} alt="SVG" />
            </div>
            <div>
                <h3>Afendi Shirt</h3>
                <p>Quantity: 2</p>
                <p>$321</p>
                <button className="" >Delete</button>
            </div>
        </div>

        <div className='cart-container-display'>
            <div>
                <img className="cart-image" src={men1Image} alt="SVG" />
            </div>
            <div>
                <h3>Afendi Shirt</h3>
                <p>Quantity: 2</p>
                <p>$321</p>
                <button className="" >Delete</button>
            </div>
        </div>

        </div>
    <div className='cart-coupon'>
    <input type="text" placeholder='Enter coupon Code'/>
    <button>Apply</button>
    </div>

    <div className='cart-price-details'>
        <p className='cart-price-details-discount'>Discount: $20</p>
        <p className='cart-price-details-delivery'>Delivery: $0</p>
        <p className='cart-price-details-sub-total'>Sub Total: $1110</p>
        <p className='cart-price-details-total'>TOTAL: $1200</p>
    </div>


        <div className='cart-checkout-container'>
            <button className='cart-checkout-btn-primary'>checkout</button>
            <button className='cart-checkout-btn-secondary'>Continue Shopping</button>
        </div>
        </div>
  )
}

export default fashioncart