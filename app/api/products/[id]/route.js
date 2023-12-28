import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTittle: title, newName: name, newQuantity: quantity, newPrice: price, newBrand: brand, newSeller: seller, newPayment: payment, newDescription: description } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, { title, name, quantity, price, brand, seller, payment, description });
  return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
