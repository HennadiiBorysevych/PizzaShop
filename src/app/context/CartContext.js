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
    additionalTopping.sort((a, b) => a.name?.localCompare(b.name));

    const newItem = {
      id,
      image,
      name,
      price,
      additionalTopping,
      size,
      crust,
      amount: 1,
    };

    const cartItemIndex = cart.findIndex((item) => {
      return (
        item.id === id &&
        item.price === price &&
        item.size === size &&
        JSON.stringify(item.additionalTopping) ===
          JSON.stringify(additionalTopping) &&
        item.crust === crust
      );
    });

    if (cartItemIndex === -1) {
      setCart([...cart, newItem]);
    } else {
      const newCart = [...cart];
      newCart[cartItemIndex].amount += 1;
      setCart(newCart);
    }

    setCart([...cart, newItem]);

    setIsOpen(true);
  };
  const removeItem = (id, price, crust) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price && item.crust === crust
    );
    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  };
  return (
    <CartContext.Provider
      value={{ isOpen, setIsOpen, addToCart, cart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
