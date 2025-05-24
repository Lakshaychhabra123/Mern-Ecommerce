import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OrderCheckout = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white px-4 py-8 sm:px-6 lg:px-8 flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-2xl space-y-6 rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-emerald-400">Checkout</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-md border border-gray-600 bg-gray-900 p-2 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-md border border-gray-600 bg-gray-900 p-2 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Shipping Address
            </label>
            <textarea
              placeholder="1234 Main St, City, Country"
              className="w-full rounded-md border border-gray-600 bg-gray-900 p-2 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none"
              rows={3}
            />
          </div>

          <div className="pt-4 border-t border-gray-700">
            <motion.button
              className="w-full rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert("Order placed successfully!")}
            >
              Place Order
            </motion.button>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="text-sm font-medium text-emerald-400 underline hover:text-emerald-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderCheckout;
