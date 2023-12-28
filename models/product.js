import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    name: String,
    quantity: Number,
    price: Number,
    brand: String,
    seller: String,
    payment: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
