import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GetInvolved() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 via-white to-amber-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-amber-700 mb-4"
          >
            {/* 🤝 Get Involved */}
            Get Involved
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-gray-800 mb-6"
          >
            Be the Reason Someone Feels Cared For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto text-gray-700 leading-relaxed"
          >
            At Anugrah, we believe that care is not a duty—it is a gift. A gift that anyone can offer.
            Whether you’re a student, a professional, a homemaker, or a retired elder—you can help
            bring peace, dignity, and comfort to someone’s life.
            <br />
            <br />
            Here’s how you can become a part of our growing circle of care:
          </motion.p>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* <h2 className="text-3xl font-bold text-amber-700 mb-4">🧡 Volunteer With Us</h2> */}
            <h2 className="text-3xl font-bold text-amber-700 mb-4">Volunteer With Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Give your time, your skills, or just your presence. You don’t have to be a doctor or
              nurse to help. All it takes is a kind heart and a little time.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
              <li>Spend time with patients or their families</li>
              <li>Help with activities, feeding, or emotional support</li>
              <li>Organize events or celebrations for patients</li>
              <li>Support awareness campaigns and admin work</li>
              <li>International Volunteers are welcome free room and board will be provided,<br/> please contact us (on whatsapp or call +91 8800845139 )</li>
            </ul>
            {/* <a
              href="https://forms.gle/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-md"
            >
              📝 Become a Volunteer
            </a> */}
            <p className="italic text-gray-500 mt-3">
              “The best gift you can give someone is your time and presence.”
            </p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <img
              src="/volunteer.jpg"
              alt="Volunteer"
              className="rounded-2xl shadow-lg mx-auto w-full md:w-[85%]"
            />
          </motion.div> */}
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-white to-amber-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/donation.jpg"
              alt="Donate"
              className="rounded-2xl shadow-lg mx-auto w-full md:w-[85%]"
            />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* <h2 className="text-3xl font-bold text-amber-700 mb-4">🙏 Please Donate With Compassion</h2> */}
            <h2 className="text-3xl font-bold text-amber-700 mb-4">Please Donate With Compassion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your support helps us serve more people—freely and fully. Anugrah runs entirely on
              the kindness of donors and well-wishers. Every rupee goes directly toward patient care,
              medicine, food, and maintaining a safe space for healing.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
              <li>Monthly or one-time amount</li>
              <li>In memory of a loved one</li>
              <li>Medical supplies, clothes, groceries</li>
              <li>Sponsor a patient’s care</li>
              <li>Sponsor transportaion</li>
              <li>Sponsor Medication</li>
              <li>In-kind donations are welcome</li>
            </ul>
            {/* <Link
              to="/donate"
              className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-md"
            >
              💸 Support Us
            </Link> */}
            <p className="italic text-gray-500 mt-3">
              “Even a small drop of kindness can fill someone’s ocean of pain with peace.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spread the Word */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-amber-700 mb-4"
          >
            {/* 📣 Spread The Word */}
            Spread The Word
          </motion.h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-4">
            Awareness saves lives. You can help just by sharing.
            Many people don’t know that palliative care exists. Tell someone. Share our work.
            Post about us. You might lead someone to the comfort they didn’t know was possible.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="#"
              className="text-amber-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-amber-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-white to-amber-50 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-amber-700 mb-4"
          >
            {/* 🌸 Partner With Us */}
            Partner With Us
          </motion.h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
            If you’re a hospital, school, NGO, or business looking to support palliative care in
            Jodhpur—let’s work together. We’re open to collaborations, internship programs, and
            community health initiatives.
          </p>
          <p className="text-gray-700">
            📧 Email us at:{" "}
            <a
              href="mailto:anugrahcarehome@gmail.com"
              className="text-amber-600 hover:underline"
            >
              anugrahcarehome@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
