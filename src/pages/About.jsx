import React from "react";
import { motion } from "framer-motion";

export default function About() {
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
            {/* 💖 About Us */}
            About Us
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-gray-800 mb-6"
          >
            A Promise of Care, A Home of Compassion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto text-gray-700 leading-relaxed"
          >
            Anugrah Care Giving Society was born from a simple but profound truth:{" "}
            <strong>even when illness can no longer be cured, care should never end.</strong>
            We are a charitable organization initiative based in Jodhpur, dedicated to offering free care services
            to patients and caregivers who need it the most. We serve those living with chronic, life-limiting illnesses—
            bringing comfort, presence, and dignity to every moment.
          </motion.p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-amber-700 mb-6 text-center"
          >
            {/* 🌱 Our Journey */}
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-center"
          >
            Anugrah began with a single thought: <em>“No one should suffer alone.”</em><br />
            In the chaos of medical treatments and hospital corridors, we saw a need for a gentler space —
            a space where hands are held, caregivers are not forgotten, and care is measured in listening, touch,
            and time. With the support of compassionate volunteers and believers in human kindness, we opened
            our doors — not as a hospital, but as a home for healing.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-white to-amber-50 text-center">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            {/* <h2 className="text-2xl font-bold text-amber-700 mb-3">🧡 Our Mission</h2> */}
            <h2 className="text-2xl font-bold text-amber-700 mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide free, compassionate palliative & supportive care to every person in need,
              ensuring dignity, comfort, and peace—always.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            {/* <h2 className="text-2xl font-bold text-amber-700 mb-3">🌸 Our Vision</h2> */}
            <h2 className="text-2xl font-bold text-amber-700 mb-3">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              A world where no one dies in pain, no caregiver feels alone, and every life is honored
              with love care and dignity until the very end.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-amber-700 mb-8 text-center"
          >
            {/* 🫂 Our Values */}
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Compassion First", desc: "We care deeply, truly, and without conditions." },
              { title: "Dignity Always", desc: "Every human being deserves respect, regardless of their stage of illness." },
              // { title: "Service With Heart", desc: "We give without expecting, and we show up fully." },
              { title: "Community Care", desc: "We believe healing happens best in community, not isolation." },
              { title: "Compassion and Gratitude in Action", desc: "Every act of giving, no matter how small, is a blessing shared." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-amber-50 rounded-2xl shadow p-6"
              >
                <h3 className="text-lg font-semibold text-amber-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-white to-amber-50 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-amber-700 mb-4"
          >
            {/* 🤲 Our Team */}
            Our Team
          </motion.h2>
          <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
            Anugrah is powered by a small but mighty circle of caregivers, volunteers, nurses,
            counselors, and kind souls who show up with empathy and commitment every single day.
            Most of all, it is powered by love.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-amber-700 mb-6"
          >
            {/* 🙌 Who We Serve */}
            Who We Serve
          </motion.h2>
          <ul className="max-w-2xl mx-auto text-left list-disc list-inside text-gray-700 space-y-2">
            <li>Terminally ill patients in need of end-of-life care</li>
            <li>Families overwhelmed by caregiving</li>
            <li>Individuals without financial support or access to care</li>
            <li>Anyone seeking kindness, relief, and connection in their final chapter</li>
          </ul>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-white to-amber-50 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            {/* 📌 Based in Jodhpur, Rajasthan */}
            Based in Jodhpur, Rajasthan
          </motion.h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We offer in-house, home-based, and respite care services to people in Jodhpur and nearby
            regions—completely free of cost.
          </p>
        </div>
      </section>
    </div>
  );
}
