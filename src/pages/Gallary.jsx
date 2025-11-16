import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  return (
    <div className="pt-20 bg-gradient-to-r from-amber-50 via-white to-amber-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center p-8"
      >
        <h1 className="text-4xl font-bold text-amber-700 mb-6">🖼️ Our Gallery</h1>
        <p className="text-gray-700 mb-10">
          Moments filled with care, hope, and compassion — captured from our journey with the community.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
