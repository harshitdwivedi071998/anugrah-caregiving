import React from "react";
import { motion } from "framer-motion";

export default function Information() {
  return (
    <div className="pt-20 bg-gradient-to-r from-amber-50 via-white to-amber-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center p-8"
      >
        <h1 className="text-4xl font-bold text-amber-700 mb-6">ℹ️ Important Information</h1>
        <p className="text-gray-700 mb-10">
          Here are some key points and frequently asked questions about palliative care,
          caregiving, and the services provided by Anugrah Care Giving Society.
        </p>

        <div className="text-left space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-amber-700 mb-2">
              What is Palliative Care?
            </h2>
            <p className="text-gray-600">
              Palliative care focuses on improving the quality of life for patients with serious
              illnesses. It is not about curing, but about caring — physically, emotionally, and spiritually.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-700 mb-2">
              Who Can Receive Our Services?
            </h2>
            <p className="text-gray-600">
              Anyone with a life-limiting illness, or families needing emotional and practical support,
              can reach out to us. All services are free of cost.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-700 mb-2">
              How Can You Help?
            </h2>
            <p className="text-gray-600">
              You can volunteer, donate, or simply share our message to spread awareness about palliative care.
              Every small effort counts in bringing comfort to others.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
