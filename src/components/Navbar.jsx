import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="max-w-[90%] mx-auto flex lg:flex-row flex-col space-y-4 justify-between items-center mt-16 mb-10">
        <div className="font-extrabold text-[32px]">
          <Link to="/"><h1>CareerBooster</h1></Link>
        </div>
        <ul className="flex gap-10 lg:flex-row flex-col">
          <li className="hover:text-[#6172e4]">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-[#6172e4]">
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li className="hover:text-[#6172e4]">
            <NavLink to="/applied-jobs">Applied Jobs</NavLink>
          </li>
          <li className="hover:text-[#6172e4]">
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
        <a href='#featured-jobs'>
        <button className="btn bg-[#7E90FE] text-white hover:bg-[#6172e4]">
          Start Applying
        </button>
        </a>
      </nav>
  )
}

export default Navbar