"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [seller, setSeller] = useState("");
  const [description, setDescription] = useState("");
  const [payment, setPayment] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !name || !quantity || !price || !brand || !seller || !payment || !description) {
      alert("All Field are required.");
      return;
    }

    try {
      const res = await fetch("https://mokyra-crud.netlify.app/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, name, quantity, price, brand, seller, payment, description }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
<form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto bg-white p-8 shadow-md rounded-md mt-10">
  <h2 className="text-2xl font-bold mb-4">Add Product</h2>

  <div className="mb-4">
    <input
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
      type="text"
      placeholder="Product Category"
    />
  </div>

  <div className="mb-4">
    <input
      onChange={(e) => setName(e.target.value)}
      value={name}
      className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
      type="text"
      placeholder="Product Name"
    />
  </div>

  <div className="mb-4">
    <input
      onChange={(e) => setQuantity(e.target.value)}
      value={quantity}
      className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
      type="number"
      placeholder="Quantity"
    />
  </div>

  <div className="mb-4">
    <input
      onChange={(e) => setPrice(e.target.value)}
      value={price}
      className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
      type="number"
      placeholder="Product Price"
    />
  </div>

  <div className="mb-4">
    <input
      onChange={(e) => setBrand(e.target.value)}
      value={brand}
      className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
      type="text"
      placeholder="Product Brand"
    />
  </div>

  <div className="mb-4">
    <input
      onChange={(e) => setSeller(e.target.value)}
      value={seller}
      className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
      type="text"
      placeholder="Seller"
    />
  </div>

  <div className="mb-4">
    <input
      onChange={(e) => setPayment(e.target.value)}
      value={payment}
      className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
      type="text"
      placeholder="Payment Method"
    />
  </div>

  <div className="mb-4">
    <input
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
      type="text"
      placeholder="Product Description"
    />
  </div>

  <button
    type="submit"
    className="bg-green-600 font-bold text-white py-3 px-6 rounded-md"
  >
    Add Product
  </button>
</form>




  );
}
