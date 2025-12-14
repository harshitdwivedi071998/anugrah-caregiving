import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 via-white to-amber-50 py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-amber-700 mb-4"
          >
            Anugrah Care Giving Society
            {/* <P>(REG.NO:COOP/2024/JODHPUR/500059)</P> */}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-gray-800 mb-6"
          >
            (REG.NO:COOP/2024/JODHPUR/500059)<br /><br />
            Compassion Beyond Cure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed"
          >

            Anugrah Care Giving Society, based in Jodhpur, Rajasthan, is a registered society devoted to providing free, compassionate, and dignified palliative / general nursing and medical care to individuals and families facing chronic or life-limiting illnesses.<br />

            Our vision is to ensure that no one suffers alone — that every patient receives comfort, care, and respect, regardless of age, gender,creed, or sexual orientation.<br />

            Through our initiative <b>Grace Home</b>, we provide 24-hour nursing care, nutritious meals, free transportation, and a peaceful, homelike environment for patients in need of respite, transitional, or end-of-life care.

            {/* Anugrah also train CHOs, ANMs, ASHAs and nursing professionals in palliative and home-based care across Jodhpur, Barmer, Ajmer, and other regions of Rajasthan. */}

            Supported by a dedicated team of healthcare professionals and volunteers, <br />
            Anugrah Care Giving Society works in collaboration with <b>HPNA (Hospice and Palliative Nurses Association India).</b>

          </motion.p>

          {/* Mini QR Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-block bg-white rounded-2xl shadow-xl p-6 mt-8"
          >
            <img
              src="/qr-code.png"
              alt="donate-qr"
              className="w-40 h-40 mx-auto mb-3 rounded-lg shadow"
            />
            <p className="text-gray-600 text-sm mb-3">
              Scan & support our mission — every act of kindness counts.
            </p>
            <Link
              to="/donate"
              className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow"
            >
              Donate Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-10"
          >
            What We Do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* In-House Care */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-amber-50 rounded-2xl shadow p-6"
            >
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                In-House Palliative Care
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer a quiet, caring space where patients receive
                care in a comfortable compasionate setting, surrounded by compassion—not machines. Caregivers are welcome here too;
                we walk this path together.
              </p>
            </motion.div>

            {/* Home Care */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-amber-50 rounded-2xl shadow p-6"
            >
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                Home Care Visits
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                For patients who wish to remain at home, our team visits regularly
                to offer medical support, emotional care, and guidance—for both patient
                and caregiver.
              </p>
            </motion.div>

            {/* Respite Care */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-amber-50 rounded-2xl shadow p-6"
            >
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                Respite Care
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Caregiving is fulfilling—but also exhausting. We offer temporary rest
                for caregivers, ensuring their loved ones are in safe, trusted hands
                while they take time to breathe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 bg-gradient-to-r from-white via-amber-50 to-white text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            Who We Serve
          </motion.h2>

          <ul className="max-w-2xl mx-auto text-gray-700 space-y-2 text-left list-disc list-inside">
            <li>Anyone with health related suffering.</li>
            <li>Terminally ill patients needing comfort and care.</li>
            <li>Families struggling with emotional or physical caregiving.</li>
            <li>Individuals without financial means to afford home care or need a place to stay.</li>
            {/* <li>Anyone in need of dignity in suffering</li> */}
          </ul>
        </div>
      </section>

      {/* Who We trainings Section */}
      <section className="py-16 bg-white from-white via-amber-50 to-white text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            Training
          </motion.h2>

          <ul className="max-w-2xl mx-auto text-gray-700 space-y-2 text-left list-disc list-inside">
            <li>Community health worker training</li>
            <li>Nurses and nursing assistance training</li>
            <li>Caregiver's skill training </li>
            <li>Communinty awareness</li>
            <li>Free health check up and cancer awareness camp</li>
            {/* <li>Anyone in need of dignity in suffering 05-11-2-25</li> */}
          </ul>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-16 bg-gradient-to-r to-white text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-amber-700 mb-6"
          >
            {/* 🌟 How You Can Be a Part of This Care */}
            How You Can Be a Part of This Care
          </motion.h2>
          <ul className="max-w-2xl mx-auto text-gray-700 space-y-2 text-left list-disc list-inside">
            <li>Volunteer your time and love</li>
            <li>Donate, and help us reach more families</li>
            <li>Refer a patient or caregiver who needs support</li>
            <li>Share our story, help us raise awareness</li>
          </ul>
          <p className="mt-6 text-gray-700 italic">
            Every act of kindness big or small creates a ripple effect
            {/* Even a small act of kindness creates a ripple of comfort. Together, let’s be the light
            for those in their darkest hour. */}
          </p>
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
            {/* 📍 We’re Based in Jodhpur, Rajasthan */}
            We’re Based in Jodhpur, Rajasthan
          </motion.h2>
          <p className="text-gray-700 mb-4">
            Serving the city and nearby regions with heart, soul, and humility.
          </p>
          {/* <blockquote className="text-gray-600 italic text-lg max-w-2xl mx-auto">
            “Until the very last breath—let there be dignity, let there be care, let there be love.”
          </blockquote> */}
        </div>
      </section>
      {/* ==== Other Websites Section ==== */}
      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl mx-auto text-center px-6"
        >
          <h2 className="text-3xl font-bold text-amber-700 mb-4">
            🌐 Our Sister Websites
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are proud to be part of a larger mission focused on care, education,
            and community service. Explore our other platforms working towards
            similar goals with compassion and dedication.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Replace links below with real URLs */}
            <Link
              to="/under-construction"
              className="block bg-amber-50 shadow-lg rounded-xl py-6 px-6 hover:bg-amber-100 transition-all"
            >
              <h3 className="text-xl font-semibold text-amber-700 mb-2">🔗 elnecindia</h3>
              <p className="text-gray-600 text-sm">
                A supportive initiative — coming soon.
              </p>
            </Link>

            {/* <a
              href="https://example-two.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-amber-50 shadow-lg rounded-xl py-6 px-6 hover:bg-amber-100 transition-all"
            >
              <h3 className="text-xl font-semibold text-amber-700 mb-2">🔗 Website Two</h3>
              <p className="text-gray-600 text-sm">
                Another dedicated platform aligned with our mission of compassion and
                service for those in need.
              </p>
            </a> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
