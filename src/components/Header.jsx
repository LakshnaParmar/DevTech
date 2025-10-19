import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import logo from '../assets/logo.webp'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-12">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-32 md:w-40" />
        </div>

        <nav className="hidden md:flex gap-8 font-medium text-sky-950">
          <NavLink to="/" className="hover:text-sky-800">Home</NavLink>
          <NavLink to="/services" className="hover:text-sky-800">Services</NavLink>
          <NavLink to="/about" className="hover:text-sky-800">About</NavLink>
          <NavLink to="/contact" className="hover:text-sky-800">Contact</NavLink>
          <NavLink to="/privacy" className="hover:text-sky-800">Privacy</NavLink>
          <NavLink to="/terms" className="hover:text-sky-800">Terms</NavLink>
        </nav>

        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className='text-sky-950 hover:bg-sky-800 hover:text-white p-2'>Home</NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className='text-sky-950 hover:bg-sky-800 hover:text-white p-2'>Services</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className='text-sky-950 hover:bg-sky-800 hover:text-white p-2'>About</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className='text-sky-950 hover:bg-sky-800 hover:text-white p-2'>Contact</NavLink>
            <NavLink to="/privacy" onClick={() => setMenuOpen(false)} className='text-sky-950 hover:bg-sky-800 hover:text-white p-2'>Privacy</NavLink>
            <NavLink to="/terms" onClick={() => setMenuOpen(false)} className='text-sky-950 hover:bg-sky-800 hover:text-white p-2'>Terms</NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
