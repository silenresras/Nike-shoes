// pages/Admin/AdminLayout.jsx
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md rounded-xl mt-4 ml-4 p-4">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://i.pravatar.cc/100?img=12" // use actual admin profile pic or avatar service
            alt="Admin"
            className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover"
          />
          <h2 className="mt-3 text-lg font-semibold text-gray-700">Admin</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-3">
          <Link to="/admin/dashboard" className="hover:text-blue-500 font-medium">Dashboard</Link>
          <Link to="/admin/products" className="hover:text-blue-500 font-medium">Manage Products</Link>
          <Link to="/admin/add-product" className="hover:text-blue-500 font-medium">Add Product</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
