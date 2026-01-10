import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-black text-white border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* NAV ROW (VERTICALLY CENTERED) */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Logo"
            />
            <span className="text-xl font-semibold">
              Shalini Rathore
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/Projects" className="hover:text-yellow-400">Projects</Link></li>
            <li><Link to="/Skills" className="hover:text-yellow-400">Skills</Link></li>
            <li><Link to="/Resume" className="hover:text-yellow-400">Resume</Link></li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded hover:bg-gray-700 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>

        {/* Mobile Menu (pushes content down) */}
        {open && (
          <div className="md:hidden border-t border-gray-700 py-4">
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/Projects" className="hover:text-yellow-400">Projects</Link></li>
              <li><Link to="/Skills" className="hover:text-yellow-400">Skills</Link></li>
              <li><Link to="/Resume" className="hover:text-yellow-400">Resume</Link></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}
