import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8 mt-16">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white text-xl font-semibold mb-3">About AnugrahCare</h3>
          <p className="text-sm leading-relaxed">
            {/* A not-for-profit from Jodhpur providing free palliative, home and respite care with dignity and compassion. */}
            Charitable organization providing free in-house care, respite care, and home-based support for those living with life-limiting illnesses and their families.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber-400">About</Link></li>
            <li><Link to="/services" className="hover:text-amber-400">Services</Link></li>
            <li><Link to="/get-involved" className="hover:text-amber-400">Get Involved</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">Near Magra punjla Post Office, Jodhpur, Rajasthan</p>
          <p className="text-sm">Email: anugrahcarehome@gmail.com</p>
          <p className="text-sm">Phone: +91 -( 8690111591, 8690111592, 8690111593 )</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-amber-700 mb-3">💛 Stay Updated</h3>
          <p className="text-white-600 leading-relaxed">
            We’re growing with every act of love and every story of care.
            Stay connected with Anugrah Care Giving Society as we continue
            to serve those who need comfort, compassion, and dignity.
          </p>

        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Anugrah Care Giving Society. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-400"><Facebook size={18} /></a>
            <a href="#" className="hover:text-amber-400"><Instagram size={18} /></a>
            <a href="#" className="hover:text-amber-400"><Linkedin size={18} /></a>
            <a href="mailto:anugrahcarehome@gmail.com" className="hover:text-amber-400"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
