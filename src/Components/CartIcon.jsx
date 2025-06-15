import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const CartIcon = ({ iconColor = "text-white", badgeColor = "bg-red-500" }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
      <FaShoppingCart className={`text-2xl ${iconColor}`} />
      {cartItemCount > 0 && (
        <span
          className={`absolute -top-2 -right-2 ${badgeColor} text-white text-xs w-5 h-5 flex items-center justify-center rounded-full`}
        >
          {cartItemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
