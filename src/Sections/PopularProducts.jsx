import React from "react";
import { products } from "../Constants";
import PopularProductsCard from "../Components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <section id="Products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl mt-5 text-rose-500 font-palanquin font-bold ">
          Our
          <span className="text-coral-red"> Popular Products </span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top notch quality and style with our sought after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap gap-14">
        {products.map((product) => (
          <PopularProductsCard
            key={product.name}
            imgUrl={product.picture}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
