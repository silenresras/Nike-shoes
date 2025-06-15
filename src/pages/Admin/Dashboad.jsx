// pages/Admin/Dashboard.jsx
import { product_api } from "../../api/api";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    product_api.get("/products")
      .then(res => setProductCount(res.data.length))
      .catch(err => console.error(err));
  }, []);
    return (
      <div>
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-600">Total Products</p>
          <p className="text-xl font-bold">{productCount}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">Orders</div>
        <div className="bg-white p-4 rounded shadow">Users</div>
      </div>
    </div>
    );
  };
  
  export default Dashboard;
  