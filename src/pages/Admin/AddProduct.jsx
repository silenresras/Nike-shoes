import { useState } from "react";
import axios from "axios";

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { product_api } from "../../api/api";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    discount: "",
    description: "",
    stock: "",
    sizes: "",
    colors: "",
    category: "",
    isFeatured: false,
    tags: "",
    images: [],
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setForm((prev) => ({
        ...prev,
        images: files,
      }));
    } else if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const uploadedImageUrls = [];
      for (const file of form.images) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "nike_shop_products_upload"); // ← use actual preset name
        data.append("folder", "products");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dbmubyfcx/image/upload",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: false, // Explicitly tell Axios NOT to send cookies
          }
        );

        uploadedImageUrls.push(res.data.secure_url);
      }

      const payload = {
        name: form.name,
        brand: form.brand,
        price: Number(form.price),
        discount: Number(form.discount),
        description: form.description,
        stock: Number(form.stock),
        sizes: form.sizes.split(",").map((s) => s.trim()),
        colors: form.colors.split(",").map((c) => c.trim()),
        category: form.category,
        isFeatured: form.isFeatured,
        tags: form.tags.split(",").map((t) => t.trim()),
        images: uploadedImageUrls,
        createdBy: "684b690acb7e3c737688a34d",
      };
      await product_api.post('/products', payload);
      alert("Product added successfully!");

      setForm({
        name: "",
        brand: "",
        price: "",
        discount: "",
        description: "",
        stock: "",
        sizes: "",
        colors: "",
        category: "",
        isFeatured: false,
        tags: "",
        images: [],
      });
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto mt-8 space-y-10"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Add New Product
      </h2>

      {/* --- Basic Info Section --- */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 mb-1">Product Name</label>
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Product Name"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Brand</label>
            <Input
              type="text"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              placeholder="Product Brand"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Price</label>
            <Input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Product Price"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Discount (e.g. 0.1)</label>
            <Input
              type="number"
              name="discount"
              value={form.discount}
              onChange={handleChange}
              placeholder="Discount"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 min-h-[150px]"
            placeholder="Description (you can use bullet points)"
          />
        </div>
      </section>

      {/* --- Inventory & Variants Section --- */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">Inventory & Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 mb-1">Stock Quantity</label>
            <Input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              placeholder="Stock Quantity"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Sizes (comma-separated)</label>
            <Input
              type="text"
              name="sizes"
              value={form.sizes}
              onChange={handleChange}
              placeholder="sizes"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Colors (comma-separated)</label>
            <Input
              type="text"
              name="colors"
              value={form.colors}
              onChange={handleChange}
              placeholder="Colors"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Category (e.g. Men, Women)</label>
            <Input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Input
            type="Checkbox"
            name="isFeatured"
            value={form.isFeatured}
            onChange={handleChange}
          />
          <label className="text-gray-700">Mark as Featured Product</label>
        </div>
      </section>

      {/* --- Tags & Media --- */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">Tags & Media</h3>
        <div>
          <label className="block text-gray-600 mb-1">Tags (comma-separated)</label>
          <Input
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="Tags"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Product Images</label>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 bg-white"
          />
        </div>
      </section>

      {/* --- Submit Button --- */}
      <Button
        type="submit"
        label={uploading ? "Uploading..." : "Create Product"}
        isLoading={uploading}
      />

    </form>

  );
};

export default AddProduct;
