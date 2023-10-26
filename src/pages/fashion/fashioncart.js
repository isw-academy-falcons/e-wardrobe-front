import React, { useEffect } from 'react';

import "./fashioncart.css";
import AppNavBar from "../../components/AppNavBar";

const FashionCart = () => {
  // Initialize the cart state with an empty array
  const [cart, setCart] = React.useState([]);

  useEffect(() => {
    // Retrieve cart data from local storage
    const cartData = localStorage.getItem('cart');

    // Parse the cart data (or initialize an empty array if no data)
    const parsedCart = cartData ? JSON.parse(cartData) : [];

    // Set the cart state with the parsed cart data
    setCart(parsedCart);
  }, []);

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    // Filter out the product with the specified ID and update the cart state
    const updatedCart = cart.filter((product) => product.id !== productId);

    // Save the updated cart data to local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Update the cart state
    setCart(updatedCart);
  };

  // Calculate total price based on products in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + parseFloat(product.price.replace('$', '')) * product.quantity;
    }, 0);
  };

  // Conditionally render cart contents or a message when the cart is empty
  const cartContent = cart.length === 0 ? (
    <div>
    <p className='empty-cart'>Your cart is empty. Let us look for something for you</p>
    <button className='empty-cart-button'> <a href='/fashion'>Shop</a></button>
    </div>) : (
    <div>
      <h1 className='cart-header'>My Cart</h1>

      <div className='cart-product-container'>
        {cart.map((product) => (
          <div className='cart-container-display' key={product.id}>
            <div>
              <img className="cart-image" src={product.image} alt={product.name} />
            </div>
            <div>
              <h3>{product.name}</h3>
              <p>Quantity: {product.quantity}</p>
              <p>{product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className='cart-coupon'>
        <input type="text" placeholder='Enter coupon Code' />
        <button>Apply</button>
      </div>

      <div className='cart-price-details'>
        <p className='cart-price-details-discount'>Discount: $20</p>
        <p className='cart-price-details-delivery'>Delivery: $0</p>
        <p className='cart-price-details-sub-total'>Sub Total: ${calculateTotalPrice()}</p>
        <p className='cart-price-details-total'>TOTAL: ${calculateTotalPrice()}</p>
      </div>

      <div className='cart-checkout-container'>
        <button className='cart-checkout-btn-primary'><a  cart-checkout-btn-primary-link href='/payment'>Checkout</a></button>
        <button className='cart-checkout-btn-secondary'><a cart-checkout-btn-secondary-link href='/fashion'>Continue Shopping</a></button>
      </div>
    </div>
  );

  return (
    <div>
      <AppNavBar />
      {cartContent}
    </div>
  );
}

export default FashionCart;
