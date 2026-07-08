"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserMenu() {
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    router.push("/login");
  };

  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/login" className="hover:text-orange-500">
          Login
        </Link>

        <span>|</span>

        <Link href="/register" className="hover:text-orange-500">
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">

      <span className="font-medium">
        Hi, {user.name}
      </span>

      <button
        onClick={logout}
        className="text-red-500 hover:underline"
      >
        Logout
      </button>

    </div>
  );
}