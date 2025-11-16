import React from "react";
import { motion } from "framer-motion";

export default function Resources() {
  const resources = [
    {
      title: "Understanding Palliative Care",
      desc: "Learn what palliative care really means and how it helps patients and families live with dignity.",
    },
    {
      title: "Supporting a Caregiver",
      desc: "Tips and emotional support for those caring for loved ones with life-limiting illness.",
    },
    {
      title: "Community Awareness Material",
      desc: "Printable brochures and posters to help spread awareness about compassionate care.",
    },
  ];

  return (
    <div className="pt-20 bg-gradient-to-r from-amber-50 via-white to-amber-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center p-8"
      >
        <h1 className="text-4xl font-bold text-amber-700 mb-6">📚 Resources & Learning</h1>
        <p className="text-gray-700 mb-10">
          Explore our knowledge base to understand, support, and promote compassionate care.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-md rounded-2xl p-6 text-left"
            >
              <h2 className="text-xl font-semibold text-amber-700 mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.desc}</p>
              <a
                href="#"
                className="text-amber-600 mt-3 inline-block font-medium hover:underline"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
