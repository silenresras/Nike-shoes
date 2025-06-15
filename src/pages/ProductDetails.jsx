import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Components/Button";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:7000/api/products/slug/${slug}`);
        setProduct(res.data);
        setSelectedSize(res.data.sizes?.[0] || "");
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };

    fetchSingleProduct();
  }, [slug]);

  const handleThumbnailClick = (index) => setCurrentIndex(index);
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, product.images.length - 1));
  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === "inc") return prev < product.stock ? prev + 1 : prev;
      if (type === "dec") return prev > 1 ? prev - 1 : prev;
      return prev;
    });
  };

  if (!product) return <div className="text-center py-10 text-gray-600">Loading product...</div>;

  const images = product.images || [];

  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative">
            <img
              src={images[currentIndex]}
              alt={`${product.name} ${currentIndex + 1}`}
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
            {currentIndex > 0 && (
              <button onClick={handlePrev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <ChevronLeft />
              </button>
            )}
            {currentIndex < images.length - 1 && (
              <button onClick={handleNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <ChevronRight />
              </button>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(index)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                  index === currentIndex ? "border-coral-red" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.description}</p>

          <p className="text-2xl text-coral-red font-semibold mt-4">
            Ksh {product.price.toLocaleString()}
          </p>

          {/* Sizes */}
          <div className="mt-6">
            <p className="font-semibold mb-1">Select Size:</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes?.map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded border ${
                    selectedSize === size ? "bg-coral-red text-white" : "bg-gray-100 text-gray-800"
                  } hover:bg-coral-red hover:text-white transition`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="font-semibold mb-1">Quantity:</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleQuantityChange("dec")}
                className="px-3 py-1 bg-gray-200 text-xl rounded hover:bg-gray-300"
              >
                −
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("inc")}
                className="px-3 py-1 bg-gray-200 text-xl rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
            <p className="mt-2 text-green-600 text-sm">
              {product.stock} item(s) in stock
            </p>
          </div>

          {/* Tags */}
          <div className="mt-6">
            <p className="font-semibold">Tags:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {product.tags?.map((tag, idx) => (
                <span key={idx} className="bg-amber-200 px-2 py-1 text-sm rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
<Button
  label="Add to Cart"
  onClick={() => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity,
      image: product.images?.[0],
    });
    toast.success("Added to cart!");
  }}
/>

            <Button
              label="Buy Now"
              backgroundColor="bg-black"
              textColor="text-white"
              borderColor="border-black"
              onClick={() =>
                console.log("BUY NOW:", {
                  id: product._id,
                  name: product.name,
                  selectedSize,
                  quantity,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
