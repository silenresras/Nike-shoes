import { useEffect, useState } from "react";

const ProductList = () => {

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow p-4 rounded-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.brand}</p>
            <p className="text-blue-600 font-bold">Ksh {product.price}</p>
            <p className="text-sm text-gray-500 mt-1">
              Sizes: {product.sizes.join(", ")}
            </p>
            <p className="text-sm text-gray-500">
              Colors: {product.colors.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
