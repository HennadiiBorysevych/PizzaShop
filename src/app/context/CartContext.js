// cart context
"use client";
import React, { useState, createContext, useEffect } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCarTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemAmount(amount);
  }, []);

  useEffect(() => {
    const price = cart.reduce((a, c) => {
      return a + Number(c.price) * c.amount;
    }, 0);
    setCarTotal(price);
  }, [cart]);

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

    const itemIndex = cart.findIndex((item) => {
      return item.id === id && item.price === price;
    });

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

  const increaseAmount = (id, price) => {
    const itemIndex = cart.findIndex((item) => {
      return item.id === id && item.price === price;
    });

    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart[itemIndex].amount += 1;
      setCart(newCart);
    }
  };

  const decreaseAmount = (id, price) => {
    const itemIndex = cart.findIndex((item) => {
      return item.id === id && item.price === price;
    });

    if (itemIndex !== -1) {
      const newCart = [...cart];
      if (newCart[itemIndex].amount > 1) {
        newCart[itemIndex].amount -= 1;
      }
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        setCart,
        removeItem,
        decreaseAmount,
        increaseAmount,
        itemAmount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
