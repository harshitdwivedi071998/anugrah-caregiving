import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from "../assets/images/anugrahlogo.png"

export default function Header(){
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Services', path: '/services'},
    {name: 'GetInvolved', path: '/get-involved'},
    {name: 'Contact', path: '/contact'},
    // {name: 'News', path: '/news'},
    // {name: 'Information', path: '/infromation'},
    // {name: 'Gallary', path: '/gallary'},
    // {name: 'Resources', path: '/resources'},
  ]

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-md' : 'bg-white/60'}`}>
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* <Link to="/" className="text-2xl font-bold text-amber-600 tracking-tight">
          Anugrah<span className="text-gray-800">Care</span>
        </Link> */}
        <Link to="/">
          <img src={logo} alt="" width={120}  />
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({isActive}) => isActive ? 'text-amber-600 font-medium' : 'text-gray-700 hover:text-amber-600 transition'}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/donate" className="ml-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow">
            Donate
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(v=>!v)} aria-label="menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-inner">
          <div className="flex flex-col items-center py-6 space-y-3">
            {navLinks.map(link => (
              <NavLink key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-lg text-gray-700 hover:text-amber-600">
                {link.name}
              </NavLink>
            ))}
            <Link to="/donate" onClick={() => setIsOpen(false)} className="mt-2 px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full">
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
