import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import "./fashionProduct.css";
import { useCart } from './CartContext';
import AppNavBar from "../../components/AppNavBar";
import { Toast } from '../../components/ApiResponse';

const FashionProduct = ({ product: initialProduct }) => {
  const { productData } = useParams();
  const decodedProductData = decodeURIComponent(productData);

  // Retrieve the product data from the route parameters
  const [product, setProduct] = useState(() => {
    try {
      return JSON.parse(decodedProductData);
    } catch (error) {
      // Handle the error (e.g., show an error message or redirect to a 404 page)
      Toast.fire({
        icon: "error",
        title: error
      })
      return null; // Set an appropriate default value or handle the error accordingly
    }
  });

  const { cart, dispatch } = useCart(); // Added cart here

  const [addedToBag, setAddedToBag] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToBagClick = () => {
    const productPayload = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    };

    // Retrieve existing cart data from local storage
    const existingCartData = localStorage.getItem('cart');

    // Parse the existing cart data (or initialize an empty array if no data)
    const existingCart = existingCartData ? JSON.parse(existingCartData) : [];

    // Update the cart with the new product
    const updatedCart = [...existingCart, productPayload];

    // Save the updated cart data to local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Dispatch an action to add the product to the cart (optional)
    dispatch({ type: 'ADD_TO_CART', payload: productPayload });

    // Update the addedToBag state
    setAddedToBag(true);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <AppNavBar />
      <p>Items in Cart: {cart.length}</p>
      <div className='product-item-container'>
        <div className='product-Item1'>
          <img className="productItem-pic" src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button
            className="productItem-btn productItem-btn-primary"
            onClick={handleAddToBagClick}
            disabled={addedToBag}
          >
            {addedToBag ? 'Added to Bag' : 'Add to Bag'}
          </button>
          <button className="productItem-btn productItem-btn-secondary"><a className="fashion-link" href='/fashion-cart'>Proceed to Checkout</a></button>
        </div>

        <div className='product-Item2'>
          <div className='product-item2-container'>
            <h3 className='product-Item2-header'>ABOUT PRODUCT</h3>
            <p className='product-Item2-description'>Ready to rock the newly released Afendi. This shirt gives the strike of balance, comfort, and flexibility to do any kind of work at any outing whatsoever</p>

            <div className="product-quantity">
              <button
                className="product-quantity-btn"
                onClick={handleDecreaseQuantity}
                disabled={addedToBag}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className="product-quantity-btn"
                onClick={handleIncreaseQuantity}
                disabled={addedToBag}
              >
                +
              </button>
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
  );
}

export default FashionProduct;
