import React from "react";
import { motion } from "framer-motion";

export default function News() {
  return (
    <div className="pt-20 bg-gradient-to-r from-amber-50 via-white to-amber-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center p-8"
      >
        <h1 className="text-4xl font-bold text-amber-700 mb-6">📰 Latest News & Updates</h1>
        <p className="text-gray-700 mb-10">
          Stay informed with the latest stories and events from Anugrah Care Giving Society.
          We continue to spread care and compassion throughout our community.
        </p>

        <div className="space-y-8 text-left">
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold text-amber-700 mb-2">
              🌟 New Care Center Expansion
            </h2>
            <p className="text-gray-600">
              Our Jodhpur care center is expanding to offer more space for patients and families.
              Together, we are building a place of comfort and dignity.
            </p>
            <p className="text-sm text-gray-500 mt-2">Published: Oct 2025</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold text-amber-700 mb-2">💛 Volunteer Drive 2025</h2>
            <p className="text-gray-600">
              We invite everyone to join our upcoming volunteer program.
              Small acts of kindness can bring big change to someone’s life.
            </p>
            <p className="text-sm text-gray-500 mt-2">Published: Sep 2025</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
