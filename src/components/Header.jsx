import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import devtech_logo from '../assets/devtech_logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `hover:text-yellow-400 transition ${
      isActive ? 'text-yellow-400 font-semibold' : 'text-white'
    }`

  return (
    <header className="w-full shadow-sm fixed top-0 left-0 z-50 bg-gradient-to-br from-slate-950 to-slate-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img src={devtech_logo} alt="Logo" className="w-35 md:w-50" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <NavLink to="/privacy" className={navLinkClass}>
            Privacy
          </NavLink>
          <NavLink to="/terms" className={navLinkClass}>
            Terms
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-yellow-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-bl from-slate-950 to-slate-500 shadow-md border-t border-gray-100">
          <nav className="flex flex-col gap-4 p-4 text-white font-medium">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Contact
            </NavLink>
            <NavLink
              to="/privacy"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Privacy
            </NavLink>
            <NavLink
              to="/terms"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Terms
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
