// cart context
"use client";
import React, { useState, createContext } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const addToCart = (
    id,
    image,
    name,
    price,
    additionalTopping,
    size,
    crust
  ) => {
    additionalTopping.sort((a, b) => a.name.localCompare(b.name));

    const newItem = {
      id,
      image,
      name,
      price,
      additionalTopping,
      size,
      crust,
      quantity: 1,
    };
    setCart([...cart, newItem]);
  };

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
