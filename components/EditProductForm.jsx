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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
           <input
        onChange={e => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Category"
      />

<input
        onChange={e => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Name"
      />

      <input
        onChange={e => setNewQuantity(e.target.value)}
        value={newQuantity}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Quantity"
      />

      <input
        onChange={e => setNewPrice(e.target.value)}
        value={newPrice}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Price"
      />

      <input
        onChange={e => setNewBrand(e.target.value)}
        value={newBrand}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Brand"
      />

      <input
        onChange={e => setNewSeller(e.target.value)}
        value={newSeller}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Seller"
      />

      <input
        onChange={e => setNewPayment(e.target.value)}
        value={newPayment}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Payment Method"
      />

      <input
        onChange={e => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Product
      </button>
    </form>
  );
}
