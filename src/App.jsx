import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import ThankYou from './pages/ThankYou'
import Header from './components/Header'
import Footer from './components/Footer'
import News from './pages/News'
import Information from './pages/Information'
import Gallery from './pages/Gallary'
import Resources from './pages/Resources'
import UnderConstruction from './pages/UnderConstruction'
import ScrollToTop from './pages/ScrollToTop'

export default function App(){
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-800">
      <Header />
      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/get-involved" element={<GetInvolved/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/thank-you" element={<ThankYou/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/infromation" element={<Information/>} />
          <Route path="/gallary" element={<Gallery/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/under-construction" element={<UnderConstruction />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
