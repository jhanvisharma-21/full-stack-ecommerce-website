"use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    const res = await fetch(
      `http://localhost:5000/api/orders/${user.id}`
    );

    const data = await res.json();

    setOrders(data);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p>No Orders Found.</p>
      ) : (
        <div className="space-y-6">

          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow rounded-xl p-6"
            >

              <div className="flex justify-between">

                <div>
                  <h2 className="text-xl font-semibold">
                    Order ID
                  </h2>

                  <p className="text-gray-500">
                    {order._id}
                  </p>
                </div>

                <div>
                  <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full">
                    {order.status}
                  </span>
                </div>

              </div>

              <hr className="my-4"/>

              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between mb-2"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}

              <hr className="my-4"/>

              <div className="flex justify-between">

                <span className="font-semibold">
                  Total
                </span>

                <span className="font-bold text-green-600">
                  ₹{order.totalAmount}
                </span>

              </div>

              <p className="mt-4 text-gray-500">
                Payment : {order.paymentMethod}
              </p>

              <p className="text-gray-500">
                Ordered On :
                {" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </p>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}