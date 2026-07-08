import React from "react";
import {
  FaTruck,
  FaUndo,
  FaLock,
  FaHeadset,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] py-10 border-t">
      <div className="container mx-auto px-4">

        {/* TOP FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b pb-6 mb-6 text-center">

          <div className="flex flex-col items-center">
            <FaTruck className="text-2xl mb-2 text-orange-500" />
            <h4 className="font-semibold">Free Shipping</h4>
            <p className="text-sm text-gray-600">On orders above ₹499</p>
          </div>

          <div className="flex flex-col items-center">
            <FaUndo className="text-2xl mb-2 text-orange-500" />
            <h4 className="font-semibold">10 Days Return</h4>
            <p className="text-sm text-gray-600">Easy return & exchange</p>
          </div>

          <div className="flex flex-col items-center">
            <FaLock className="text-2xl mb-2 text-orange-500" />
            <h4 className="font-semibold">Secure Payment</h4>
            <p className="text-sm text-gray-600">100% safe payment</p>
          </div>

          <div className="flex flex-col items-center">
            <FaHeadset className="text-2xl mb-2 text-orange-500" />
            <h4 className="font-semibold">24/7 Support</h4>
            <p className="text-sm text-gray-600">We’re here to help</p>
          </div>

        </div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact Us</h3>
            <p className="text-sm text-gray-600">Email: support@grocery.com</p>
            <p className="text-sm text-gray-600">Phone: +91 9876543210</p>
            <p className="text-sm text-gray-600">Address: India</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-3">Products</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Groceries</li>
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Appliances</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Our Company</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-xl text-gray-600">
              <FaFacebook className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
          © 2026 Grocery App. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;