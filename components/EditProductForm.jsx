"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({ id, title, name, quantity, price, brand, seller, payment, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newName, setNewName] = useState(name);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [newPrice, setNewPrice] = useState(price);
  const [newBrand, setNewBrand] = useState(brand);
  const [newSeller, setNewSeller] = useState(seller);
  const [newPayment, setNewPayment] = useState(payment);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newName, newQuantity, newPrice, newBrand, newSeller, newPayment ,newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update product");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto bg-white p-8 shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
           <input
        onChange={e => setNewTitle(e.target.value)}
        value={newTitle}
        className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
        type="text"
        placeholder="Product Category"
      />

<input
        onChange={e => setNewName(e.target.value)}
        value={newName}
        className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
        type="text"
        placeholder="Product Name"
      />

      <input
        onChange={e => setNewQuantity(e.target.value)}
        value={newQuantity}
        className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
        type="number"
        placeholder="Quantity"
      />

      <input
        onChange={e => setNewPrice(e.target.value)}
        value={newPrice}
        className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
        type="text"
        placeholder="Product Price"
      />

      <input
        onChange={e => setNewBrand(e.target.value)}
        value={newBrand}
        className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
        type="text"
        placeholder="Product Brand"
      />

      <input
        onChange={e => setNewSeller(e.target.value)}
        value={newSeller}
        className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
        type="text"
        placeholder="Seller"
      />

      <input
        onChange={e => setNewPayment(e.target.value)}
        value={newPayment}
        className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
        type="text"
        placeholder="Payment Method"
      />

      <input
        onChange={e => setNewDescription(e.target.value)}
        value={newDescription}
        className="input-field w-full resize-none border border-gray-300 p-2 rounded-md"
        type="text"
        placeholder="Product Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Product
      </button>
    </form>
  );
}
