'use client';  // Sahifa Client Component bo'lishini bildiradi

import React, { useState } from "react";
import { useRouter } from 'next/router';

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    image: null,
    price: "",
    rating: "",
    stock: "",
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        body: form,
      });

      const body = await res.json();

      alert(body?.message);

      if (res.status === 201) {
        setFormData({
          name: "",
          category: "",
          description: "",
          image: null,
          price: "",
          rating: "",
          stock: "",
        });
      }
    } catch (err) {
      console.log(err);
      alert("Serverda ish faoliyatida emas, keyinroq urining");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Admin Panel
        </h1>
        <form id="product-create-form" onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-600">Product Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-600">Category</label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-24"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-600">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">Price</label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">Rating</label>
              <input
                type="number"
                placeholder="Rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-600">Stock</label>
            <input
              type="number"
              placeholder="Stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
