import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Donate(){
  const navigate = useNavigate()
  const goal = 100000
  const [current, setCurrent] = useState(45670)
  const percent = Math.min((current / goal) * 100, 100)
  const [display, setDisplay] = useState(current)

  useEffect(() => {
    let start = display
    let end = current
    if (start === end) return
    const steps = 20
    const step = Math.max(1, Math.round((end - start) / steps))
    let i = 0
    const interval = setInterval(() => {
      i++
      start += step
      if (start >= end || i >= steps) {
        start = end
        clearInterval(interval)
      }
      setDisplay(start)
    }, 30)
    return () => clearInterval(interval)
  }, [current])

  function handleDonate(){
    // demo: simulate donation then route to thank you
    setCurrent(prev => Math.min(prev + 5000, goal))
    setTimeout(() => navigate('/thank-you'), 700)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-50 via-white to-amber-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-3xl font-bold text-amber-700 mb-4">Make a Donation</motion.h2>
        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-gray-700 mb-8">Scan the QR with your UPI app or click donate to simulate a contribution.</motion.p>

        <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} className="bg-white rounded-2xl shadow p-8 max-w-md mx-auto">
          <img src="/qr-code.png" alt="qr" className="w-60 h-60 mx-auto mb-6 rounded-lg shadow-md" />
          <p className="text-gray-600 mb-4">Scan or use UPI to contribute. Thank you for supporting Anugrah Care.</p>
          <button onClick={handleDonate} className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow mb-4">I Have Donated</button>

          {/* <div className="mt-6 text-left">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Raised: ₹{display.toLocaleString()}</span>
              <span>Goal: ₹{goal.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <motion.div initial={{width:0}} animate={{width:`${percent}%`}} transition={{duration:0.8}} className="h-4 bg-amber-500"></motion.div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}
