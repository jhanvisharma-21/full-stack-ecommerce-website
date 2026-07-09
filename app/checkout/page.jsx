"use client";

import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
 const { cart, clearCart } = useCart();
  const router = useRouter();

  //  Authentication Guard inside the component
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to continue.");
      router.push("/login");
    }
  }, [router]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 50 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  const orderData = {
    user: user?.id || null,
    items: cart,
    shipping: {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      city: form.city,
      state: form.state,
      pincode: form.pincode,
    },
    paymentMethod: form.payment,
    totalAmount: total,
  };

  try {
    const res = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const data = await res.json();
if (res.ok) {
  clearCart();

  alert("Order Placed Successfully!");

  router.push("/order-success");
}
  } catch (error) {
  console.error("Login Error:", error);
  toast.error("Unable to connect to the server");
}
};

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <form
          onSubmit={placeOrder}
          className="lg:col-span-2 bg-white p-8 rounded-xl shadow"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Shipping Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              required
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              required
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              required
              className="border p-3 rounded-lg"
            />
          </div>

          <textarea
            name="address"
            placeholder="Full Address"
            rows="4"
            onChange={handleChange}
            required
            className="border p-3 rounded-lg w-full mt-5"
          />

          <div className="mt-6">
            <h3 className="font-semibold mb-3">
              Payment Method
            </h3>

            <select
              name="payment"
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            >
              <option>Cash on Delivery</option>
              <option>UPI</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg mt-8 hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </form>

        {/* RIGHT */}
        <div className="bg-white p-8 rounded-xl shadow h-fit">
          <h2 className="text-2xl font-semibold mb-6">
            Order Summary
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-3"
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <hr className="my-5" />

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mt-3">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>

          <div className="flex justify-between mt-5 text-xl font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
