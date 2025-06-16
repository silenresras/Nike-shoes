// src/api/api.js
import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_API_URL;

const AUTH_URL = `${BASE_API_URL}/auth`;
const PRODUCT_URL = BASE_API_URL;

const auth_api = axios.create({
  baseURL: AUTH_URL,
  withCredentials: true,
});

const product_api = axios.create({
  baseURL: PRODUCT_URL,
  withCredentials: true,
});

export { auth_api, product_api };
