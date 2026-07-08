import products from "@/data/products";
import Link from "next/link";
import Image from "next/image";

const ProductDetails = async ({ params }) => {
const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-center text-2xl mt-20">
        Product Not Found
      </div>
    );
  }

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );
  const relatedProducts = products.filter(
  (item) =>
    item.category === product.category &&
    item.id !== product.id
);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Back Button */}
      <Link
        href="/products"
        className="text-orange-500 hover:underline font-medium"
      >
        ← Back to Products
      </Link>

      {/* Main Section */}
      <div className="bg-white rounded-2xl shadow-lg mt-6 p-8">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="flex justify-center items-center bg-gray-100 rounded-xl p-10">
           <img
  src={product.image}
  alt={product.name}
  className="w-[350px] h-[350px] object-contain"
/>
          </div>

          {/* RIGHT */}
          <div>

            <p className="text-sm text-gray-500">
              {product.brand}
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <span className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </span>

              <span className="text-gray-600">
                {product.rating} ({product.reviews} Reviews)
              </span>
            </div>

            <div className="flex items-center gap-4 mt-6">

              <span className="text-4xl font-bold text-red-500">
                ₹{product.price}
              </span>

              <span className="text-2xl line-through text-gray-400">
                ₹{product.oldPrice}
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                {discount}% OFF
              </span>

            </div>

            <div className="mt-6 space-y-2 text-gray-700">

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p>
                <strong>SKU:</strong> {product.sku}
              </p>

              <p>
                <strong>Weight:</strong> {product.weight}
              </p>

              <p>
                <strong>Availability:</strong>{" "}
                {product.stock > 0 ? (
                  <span className="text-green-600 font-semibold">
                    In Stock ({product.stock})
                  </span>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Out of Stock
                  </span>
                )}
              </p>

            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-8">

              <span className="font-semibold">
                Quantity
              </span>

              <div className="flex border rounded-lg">

                <button className="px-4 py-2">
                  -
                </button>

                <span className="px-6 py-2 border-x">
                  1
                </span>

                <button className="px-4 py-2">
                  +
                </button>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
                Add To Cart
              </button>

              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">

        <h2 className="text-2xl font-bold mb-4">
          Product Description
        </h2>

        <p className="text-gray-600 leading-8">
          {product.description}
        </p>

      </div>

      {/* Specifications */}
      <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">

        <h2 className="text-2xl font-bold mb-6">
          Specifications
        </h2>

        <table className="w-full">

          <tbody>

            <tr className="border-b">
              <td className="py-3 font-semibold">
                Brand
              </td>
              <td>{product.brand}</td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">
                Category
              </td>
              <td>{product.category}</td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">
                Weight
              </td>
              <td>{product.weight}</td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">
                SKU
              </td>
              <td>{product.sku}</td>
            </tr>

            <tr>
              <td className="py-3 font-semibold">
                Stock
              </td>
              <td>{product.stock}</td>
            </tr>

          </tbody>

        </table>

      </div>
{/* Related Products */}

<div className="mt-12">

  <h2 className="text-3xl font-bold mb-6">
    Related Products
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

    {relatedProducts.slice(0,5).map((item) => (

      <Link
        key={item.id}
        href={`/products/${item.id}`}
        className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
      >

        <div className="h-40 flex justify-center items-center">
          <Image
            src={item.image}
            alt={item.name}
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        <p className="text-xs text-gray-500 mt-3">
          {item.brand}
        </p>

        <h3 className="font-semibold mt-1">
          {item.name}
        </h3>

        <div className="text-yellow-500 mt-2">
          ⭐ {item.rating}
        </div>

        <div className="flex items-center gap-2 mt-2">

          <span className="text-red-500 font-bold">
            ₹{item.price}
          </span>

          <span className="text-gray-400 line-through text-sm">
            ₹{item.oldPrice}
          </span>

        </div>

      </Link>

    ))}

  </div>

</div>
    </div>
  );
};

export default ProductDetails;