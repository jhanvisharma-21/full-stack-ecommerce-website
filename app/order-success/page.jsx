"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccessPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 text-center">

      <FaCheckCircle
        className="text-green-500 mx-auto"
        size={90}
      />

      <h1 className="text-4xl font-bold mt-8">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-600 mt-4 text-lg">
        Thank you for shopping with Cartopia.
      </p>

      <p className="text-gray-500 mt-2">
        Your order has been confirmed and will be delivered soon.
      </p>

      <div className="flex justify-center gap-5 mt-10">

        <Link href="/">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600">
            Continue Shopping
          </button>
        </Link>

        <Link href="/products">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
            View Products
          </button>
        </Link>

      </div>

    </div>
  );
};

export default OrderSuccessPage;