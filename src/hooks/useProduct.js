// src/hooks/useProducts.js
import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error fetching products.");
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return { products, error, loading };
};

export default useProducts;
