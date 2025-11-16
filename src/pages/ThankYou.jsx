import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ThankYou(){
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-100 to-white py-20">
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-md w-full">
        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring', stiffness:120}} className="mx-auto mb-4 w-20 h-20 flex items-center justify-center bg-amber-50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h2 className="text-2xl font-bold text-amber-700 mb-3">Thank You for Your Generosity!</h2>
        <p className="text-gray-600 mb-6">Your support helps us provide care, comfort, and dignity to those who need it most.</p>
        <Link to="/" className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full">Back to Home</Link>
      </motion.div>
    </section>
  )
}
