// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Create the CartContext
const CartContext = createContext();

// Cart reducer to manage cart items
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

// Cart provider component
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to access cart context
export function useCart() {
  return useContext(CartContext);
}
