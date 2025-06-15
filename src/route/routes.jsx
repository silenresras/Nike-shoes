// src/routes/routes.jsx
import {
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";

  // sections
  import MainRoute from "./MainRoute";
  
  import SignUp from "../pages/SignUp";
  import Login from "../pages/Login";
  import ForgotPasswordPage from "../pages/ForgotPasswordPage";
  import ResetPasswordPage from "../pages/ResetPasswordPage";
  import EmailVerification from "../pages/EmailVerification";

  //products 
  import ProductDetails from "../pages/ProductDetails";
  import CartPage from "../pages/CartPage";
  
  //protecting admin panel
  import ProtectedRoute from "../Components/ProtectedRoute";
  
  // Admin Panel
  import AdminLayout from "../pages/Admin/AdminLayout";
  import Dashboard from "../pages/Admin/Dashboad";
  import Products from "../pages/Admin/Products";
  import AddProduct from "../pages/Admin/AddProduct";
  
  const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<MainRoute />} />
      <Route path="/products/:slug" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />

      {/* Authentication rotes */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
  
      {/* Protected Admin */}
      <Route element={<ProtectedRoute adminOnly={true} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
      </Route>
  
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
  
  export default AppRoutes;
  