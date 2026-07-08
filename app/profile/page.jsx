"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
  }, []);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold">Please Login</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-white rounded-xl shadow p-8">

        <div className="mb-6">
          <p className="text-gray-500">Name</p>
          <h2 className="text-2xl font-semibold">
            {user.name}
          </h2>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <h2 className="text-xl">
            {user.email}
          </h2>
        </div>

      </div>

    </div>
  );
}