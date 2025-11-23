import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function UnderConstruction() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-amber-50 via-white to-amber-50 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center bg-white shadow-xl rounded-2xl p-10 max-w-lg"
      >
        <h1 className="text-4xl font-bold text-amber-700 mb-4"> Under Construction</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          This section of our website is currently under development.
          We are working to bring something meaningful and helpful for you.
        </p>

        <p className="text-amber-600 font-semibold mb-6">
          Thank you for your patience and support 💛
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-all shadow-md"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
