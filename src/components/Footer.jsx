import React from 'react'
import logo from '../assets/brandLogo.png'
import wahmyBrand from '../assets/wahmyBrand.png'
import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer text-center py-4'>
      <div className="container">

        <div className='footer-logo'>
          <NavLink className="navbar-brand" to='/'>
            <img src={logo} width={50} />
            <img src={wahmyBrand} width={90} />
          </NavLink>
        </div>

        <div className="footer-links d-flex align-items-center gap-3 justify-content-center mt-3">
          <NavLink className='text-light' to='/contact'>
            اتصل بنا
          </NavLink>
          <div className="vr-line"></div>
          <NavLink className='text-light' to='/about'>
            من نحن
          </NavLink>
        </div>

        <div className='copyrights text-light mt-3'>
          حقوق الطبع &copy; وهمي برجر 2025
        </div>

        {/*  الجزء الجديد */}
        <div className="developer mt-2">
          Created by{" "}
          <a
            href="https://portfolio-sigma-pink-42.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eslam Mohamed
          </a>
        </div>

      </div>
    </div>
  )
}