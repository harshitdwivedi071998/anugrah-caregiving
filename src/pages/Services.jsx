import React from "react";
import { motion } from "framer-motion";

export default function Services() {
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
            Our Services
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-gray-800 mb-6"
          >
            Comfort. Compassion. Care — When It Matters Most.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto text-gray-700 leading-relaxed"
          >
            At Anugrah Care Giving Society, we walk beside those facing serious illness—
            not with medical machines or cold walls, but with warm hearts and helping hands.
            We offer a circle of care that holds patients and caregivers, especially those who
            cannot afford private services. <br />
            <strong>All our services are provided free of cost</strong>, with dignity, love, and
            deep respect for life.
          </motion.p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* In-House Palliative Care */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-amber-50 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-amber-700 mb-3">
              {/* In-House Palliative Care */}
              Grace Home
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A peaceful place to rest, heal, and be cared for. Our in-house care center in
              Jodhpur is a calm, supportive space where patients can receive holistic care
              focused on comfort, not cure.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
              <li>A home-like environment for terminally ill patients</li>
              <li>Basic nursing and medical support</li>
              <li>Personal and emotional attention</li>
              <li>Family stay and visitation options</li>
              <li>24x7 compassionate caregiving</li>
            </ul>
            <p className="italic text-gray-500">“We don’t treat the disease, we care for the person.”</p>
          </motion.div>

          {/* Home Care Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-amber-50 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-amber-700 mb-3">
              Home Care Services
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Bringing comfort and care right to your doorstep. For patients who prefer or
              need to remain at home, we provide regular home visits. Our trained team ensures:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
              <li>Pain and symptom management</li>
              <li>Wound care, Diabetic care, Trach care </li>
              <li>Colostomy care, Catheter care, N-G Tube care</li>
              <li>Medical check-ins and medication support</li>
              <li>Emotional support and counseling</li>
              <li>Caregiver guidance and relief</li>
              <li>End-of-life support with dignity</li>
            </ul>
            <p className="italic text-gray-500">
              “Because sometimes, the best place to heal is home.”
            </p>
          </motion.div>

          {/* Respite Care */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-amber-50 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-amber-700 mb-3">
              Respite Care
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For the caregiver who gives everything — rest is care too.
              Caregivers are the silent warriors—but they also get tired.
              Our respite care service allows caregivers to take a break
              while their loved ones are safely looked after by our team.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
              <li>Short-term admission for patients when caregivers need time off</li>
              <li>Safe, attentive environment with trained support staff</li>
              <li>Emotional care for both patient and caregiver</li>
            </ul>
            <p className="italic text-gray-500">
              “When you rest, your strength returns. Let us help you breathe.”
            </p>
          </motion.div>

          {/* Emotional & Spiritual Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-amber-50 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-amber-700 mb-3">
              Emotional Support
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Because healing is not just physical. Whether you’re a patient or a family member,
              we understand that illness affects the mind and spirit too.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
              <li>One-on-one listening sessions</li>
              <li>Grief counseling and guidance</li>
              <li>End-of-life preparation</li>
              <li>Gentle presence</li>
              <li>Bereavement Support</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-white to-amber-50 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-amber-700 mb-4"
          >
            📞 Need Help?
          </motion.h2>
          <p className="text-gray-700 mb-2">
            If you or someone you know needs any of our services, please reach out.
            We’re here for you.
          </p>
          <p className="text-gray-700">
            📍 <strong>Location:</strong> Near Magrapunjla Post Office, Jodhpur, Rajasthan
          </p>
          <p className="text-gray-700">
            📱 <strong>Phone:</strong> [ 8690111591, 8690111592, 8690111593]
          </p>
          <p className="text-gray-700">
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:anugrahcarehome@gmail.com" className="text-amber-600 hover:underline">
              anugrahcarehome@gmail.com
            </a>
          </p>
          <p className="text-gray-700">
            🌐 <strong>Instagram:</strong> [anugrah_jodhpur]
          </p>
          <p className="italic text-gray-600 mt-6 max-w-xl mx-auto">
            “No matter the time left, every moment can be filled with love, grace, and care.”
          </p>
        </div>
      </section>
    </div>
  );
}
