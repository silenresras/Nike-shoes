import React from "react";
import { Link } from "react-router-dom";
import { star } from "../assets1/icons";

const PopularProductsCard = ({ imgUrl, name, price, slug }) => {
  return (
    <Link
      to={`/products/${slug}`}
      className="flex flex-col w-full p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
    >
      {/* Image container with fixed ratio */}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-md">
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <img src={star} alt="rating star" className="w-5 h-5" />
        <p className="font-montserrat text-white text-sm">(4.5)</p>
      </div>

      {/* Product Name */}
      <h3 className="mt-2 text-slate-950 text-lg font-semibold font-palanquin break-words">
        {name}
      </h3>

      {/* Price under name, left-aligned */}
      <p className="mt-1 font-semibold font-montserrat text-orange-400 text-base">
        Ksh {price}
      </p>
    </Link>
  );
};

export default PopularProductsCard;
