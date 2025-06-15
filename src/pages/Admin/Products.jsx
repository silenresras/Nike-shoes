// pages/Admin/Products.jsx
import { useEffect, useState } from "react";
import { product_api } from "../../api/api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    product_api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Products</h2>
      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod._id} className="border-t">
              <td className="p-3">{prod.name}</td>
              <td className="p-3">${prod.price}</td>
              <td className="p-3">
                <button className="text-blue-500">Edit</button>
                <button className="text-red-500 ml-4">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
