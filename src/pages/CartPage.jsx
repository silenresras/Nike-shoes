// src/pages/CartPage.jsx
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setSelectedItems(cart.map((item) => `${item._id}-${item.size}`));
  }, [cart]);

  const isSelected = (item) => selectedItems.includes(`${item._id}-${item.size}`);

  const toggleSelect = (item) => {
    const id = `${item._id}-${item.size}`;
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.map((item) => `${item._id}-${item.size}`));
    }
  };

  const handleQuantityChange = (item, delta) => {
    if (item.quantity + delta < 1) return;
    addToCart({ ...item, quantity: delta });
  };

  const selectedTotal = cart
    .filter((item) => isSelected(item))
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <h2 className="text-2xl font-semibold mb-4">🛒 Your cart is empty!</h2>
        <p className="mb-6 text-gray-600">
          You can add some items here before you check out.
        </p>
        <Link to="/">
          <Button label="Shop Now" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      <div className="flex justify-between items-center mb-4">
        <div>
          <input
            type="checkbox"
            checked={selectedItems.length === cart.length}
            onChange={toggleSelectAll}
            className="mr-2"
          />
          <span>Select All</span>
        </div>
        <Button
          label={
            <>
              <FaTrash className="inline mr-1" />
              Delete Selected
            </>
          }
          onClick={() => {
            selectedItems.forEach((id) => {
              const [itemId, size] = id.split("-");
              removeFromCart(itemId, size);
            });
          }}
          textColor="text-red-600 hover:text-red-800"
          borderColor="border border-red-300"
        />

      </div>

      {cart.map((item) => {
        const selected = isSelected(item);
        return (
          <div
            key={`${item._id}-${item.size}`}
            className={`flex flex-col sm:flex-row gap-4 items-center justify-between border-b py-4 rounded-lg ${selected ? "bg-gray-100" : ""
              }`}
          >
            <div className="flex items-center gap-3 w-full sm:w-auto pl-2">
              <input
                type="checkbox"
                checked={selected}
                onChange={() => toggleSelect(item)}
              />
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
                <p className="text-sm text-gray-600">
                  Price: Ksh {item.price}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                label="-"
                onClick={() => handleQuantityChange(item, -1)}
                backgroundColor="bg-white"
                textColor="text-gray-700"
                borderColor="border"
              />
              <span>{item.quantity}</span>
              <Button
                label="+"
                onClick={() => handleQuantityChange(item, 1)}
                backgroundColor="bg-white"
                textColor="text-gray-700"
                borderColor="border"
              />
            </div>

            <button
              onClick={() => removeFromCart(item._id, item.size)}
              className="text-red-600 hover:text-red-800 pr-4"
            >
              <FaTrash />
            </button>
          </div>
        );
      })}

      <div className="mt-8 border-t pt-6 text-right">
        <p className="text-xl font-semibold mb-4">
          Total: <span className="text-coral-red">Ksh {selectedTotal}</span>
        </p>
        <Button label="Proceed to Checkout" />
      </div>
    </div>
  );
};

export default CartPage;
