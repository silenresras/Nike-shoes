// src/api/api.js
import axios from "axios";

// Base URLs
const BASE_API_URL = import.meta.env.MODE === "development"
  ? "http://localhost:7000/api"
  : "https://auth-backend-api-ce94.onrender.com";

// Individual endpoint groups
const AUTH_URL = `${BASE_API_URL}/auth`;
const PRODUCT_URL = BASE_API_URL;

// Axios instances
const auth_api = axios.create({
  baseURL: AUTH_URL,
  withCredentials: true,
});

const product_api = axios.create({
  baseURL: PRODUCT_URL,
  withCredentials: true,
});


// Named export for flexibility + consistency
export { auth_api, product_api };
