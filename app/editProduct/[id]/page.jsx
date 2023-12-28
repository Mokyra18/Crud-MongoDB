import EditProductForm from "@/components/EditProductForm";

const getProductById = async (id) => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`https://crud-mongodb.up.railway.app/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditProduct({ params }) {
  const { id } = params;
  const { product } = await getProductById(id);
  const { title, name, quantity, price, brand, seller, payment, description } = product;

  return <EditProductForm id={id} title={title} name={name} quantity={quantity} price={price} brand={brand} seller={seller} payment={payment} description={description} />;
}
