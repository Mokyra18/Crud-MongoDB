import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href="/">
        <span className="text-white font-bold text-2xl cursor-pointer">Product List</span>
      </Link>
      <Link href="/addProduct">
        <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 transform hover:scale-105 cursor-pointer">
          Add New Product
        </span>
      </Link>
    </nav>
  );
}
