import React from 'react'
import "./fashionProduct.css";
import men1Image from "../../assets/images/fashion/fashion-men/men1.svg";
import AppNavBar from "../../components/AppNavBar";

const fashionProduct = () => {
  return (
    <div>
        <AppNavBar />
    
    <div className='product-item-container'>
        <div className='product-Item1'>
            <img className="productItem-pic" src={men1Image} alt="SVG" />
            <h3>Afendi Shirt</h3>
            <p>$321</p>
            <button className="productItem-btn productItem-btn-primary" >Add to Bag</button>
            <button className="productItem-btn productItem-btn-secondary" >Proceed to Checkout</button>
        </div>
        

        <div className='product-Item2'>
        <div className='product-item2-container'>
            <h3 className='product-Item2-header'>ABOUT PRODUCT</h3>
            <p className='product-Item2-description'>Ready to rock the newly released Afendi . This shirt gives the strike of balance, comfort and is flexibility to do any kind of work at any outing whatsoever</p>

            <div className='product-quantity'>
                <button className='product-quantity-btn'>+</button>
                <p>1</p>
                <button className='product-quantity-btn'>-</button>
            </div>

            <div className='product-options'>
            <select className='product-options-size'>
              <option>Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>ExtraLarge</option>
            </select>


            <select className='product-options-color'>
              <option>Colors</option>
                <option>Black</option>
                <option>Brown</option>
                <option>White</option>
                <option>Blue</option>
            </select>

            </div>

        </div>
        </div>
    </div>
    </div>
  )
}

export default fashionProduct