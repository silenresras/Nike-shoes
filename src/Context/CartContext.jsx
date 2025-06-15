import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // Save cart to localStorage on change
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // If item with same ID & size exists, just update quantity
      const exists = prevCart.find(
        (p) => p._id === item._id && p.size === item.size
      );
      if (exists) {
        return prevCart.map((p) =>
          p._id === item._id && p.size === item.size
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (id, size) => {
    setCart((prev) => prev.filter((item) => !(item._id === id && item.size === size)));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
