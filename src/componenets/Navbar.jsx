import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <Link to="/" className='bg-red-300'>Home</Link>
    <Link to="/Projects">Projects</Link>
    <Link to="/Skills">Skills</Link>
    <Link to="/Resume">Resume</Link>
    </>
  )
}
