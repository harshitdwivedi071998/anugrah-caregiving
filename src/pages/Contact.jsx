import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
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
            {/* 📬 Contact Us */}
            Contact Us
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-gray-800 mb-6"
          >
            We’re Here For You—Always.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto text-gray-700 leading-relaxed"
          >
            Whether you're a patient, a family member, a volunteer, or simply someone who cares—your
            voice matters to us. If you need help, want to visit, or just want to understand how we
            work, please don’t hesitate to get in touch. We are always just a call or message away.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {/* Visit Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-amber-50 rounded-2xl shadow-md p-8"
          >
            <h3 className="text-xl font-semibold text-amber-700 mb-2">📍 Visit Us</h3>
            <p className="text-gray-700">
              <strong>Anugrah Care Giving Society</strong> <br />
              Near Magrapunjla Post Office, Jodhpur, Rajasthan
            </p>
            <p className="mt-3 text-gray-600">🕒 Visiting Hours: 24 x 7</p>
          </motion.div>

          {/* Call Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-amber-50 rounded-2xl shadow-md p-8"
          >
            <h3 className="text-xl font-semibold text-amber-700 mb-2">📞 Call Us</h3>
            <p className="text-gray-700 mb-2">
              For patient care, inquiries, or urgent help:
            </p>
            <p className="text-gray-800 font-medium">📱 +91-(8690111591, 8690111592, 8690111593)</p>
            <p className="text-gray-600 mt-2">Available: 24/7 Support</p>
          </motion.div>

          {/* Email Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-amber-50 rounded-2xl shadow-md p-8"
          >
            <h3 className="text-xl font-semibold text-amber-700 mb-2">📧 Email Us</h3>
            <p className="text-gray-700 mb-2">
              General queries, collaborations, volunteering:
            </p>
            <a
              href="mailto:anugrahcarehome@gmail.com"
              className="text-amber-600 hover:underline font-medium"
            >
              ✉️ anugrahcarehome@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-13 bg-gradient-to-r from-amber-50 via-white to-amber-50 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-amber-700 mb-6"
          >
            📄 Need Our Help?
          </motion.h2>
          {/* <p className="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Fill out our Contact Form and we’ll reach out to you as soon as possible.
          </p> */}
          <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              📱 WhatsApp
            </a>
          {/* <a
            href="https://forms.gle/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-md"
          >
            🌐 Request Care / Ask a Question
          </a> */}
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-amber-700 mb-6"
          >
            🔗 Follow Us & Stay Connected
          </motion.h2>
          <div className="flex justify-center space-x-8 text-amber-600">
            <a
              href="anugrah_jodhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              📷 Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              📱 WhatsApp
            </a>
            {/* <a
              href="/"
              className="hover:underline"
            >
              🌐 Website
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
