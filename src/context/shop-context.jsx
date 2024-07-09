import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    setCartItems((prev) => ({ ...prev, [itemId]: quantity }));
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  const getCartProducts = () => {
    return PRODUCTS.filter(product => cartItems[product.id] > 0).map(product => ({
      ...product,
      quantity: cartItems[product.id]
    }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    getTotalCartItems,
    getCartProducts
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;