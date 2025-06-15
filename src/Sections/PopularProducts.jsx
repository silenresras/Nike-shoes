import React, { useState, useEffect } from "react";
import useProducts from "../hooks/useProduct";
import PopularProductsCard from "../Components/PopularProductsCard";

const PopularProducts = () => {
  const { products, error, loading } = useProducts();

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  if (products.length === 0 && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="Products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl mt-5 text-coral-red font-palanquin font-bold ">
          Our
          <span className="text-coral-red"> Popular Products </span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap gap-14">
        {products.map((product) => (
          <PopularProductsCard
            key={product._id}  // Use _id for unique key
            imgUrl={product.images?.[0]}  // Ensure product.imageUrl is correct Cloudinary URL
            name={product.name}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
