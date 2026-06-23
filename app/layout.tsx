import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import { FilterProvider } from "./context/FilterContext";
import { WishlistProvider } from "./context/WishlistContext";

export const metadata = {
  title: "Grocery Application",
  description: "Ecommerce grocery app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Toaster position="top-right" reverseOrder={false} />

        <FilterProvider>
          <WishlistProvider>
            <CartProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </CartProvider>
          </WishlistProvider>
        </FilterProvider>
      </body>
    </html>
  );
}
