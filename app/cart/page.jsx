"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 50 : 0;

  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-2">
        Shopping Cart
      </h1>

      <p className="text-gray-500 mb-8">
        {cart.length} Product(s)
      </p>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 mt-2">
            Add some products to your cart.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-5 flex gap-5"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-contain"
                />

                <div className="flex-1">

                  <h2 className="text-xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500">
                    {item.brand}
                  </p>

                  <p className="text-red-500 text-2xl font-bold mt-3">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-5">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="border px-3 py-1 rounded"
                    >
                      −
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="border px-3 py-1 rounded"
                    >
                      +
                    </button>

                  </div>

                </div>

                <div className="flex flex-col justify-between items-end">

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>

                  <p className="font-bold text-xl">
                    ₹{item.price * item.quantity}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-xl shadow p-6 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

         <Link href="/checkout">
  <button className="w-full bg-green-600 text-white py-3 rounded-lg mt-8 hover:bg-green-700 transition">
    Proceed to Checkout
  </button>
</Link>

          </div>

        </div>
      )}

    </div>
  );
};

export default CartPage;