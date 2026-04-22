import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/brandLogo.png';
import wahmyBrand from '../assets/wahmyBrand.png';
import { useCart } from '../context/CartContext';

import CartSidebar from './CartSidebar';
import OrderConfirmModal from './OrderConfirmModal';
import ToastMessage from './ToastMessage';

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { getTotalItems } = useCart();

  //  قفل المينيو
  const closeMenu = () => {
    setIsMenuOpen(false);
    const collapseElement = document.getElementById('navbarSupportedContent');
    if (collapseElement) {
      collapseElement.classList.remove('show');
    }
  };

  //  فتح / قفل
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //  اسكرول
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);

      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/*  Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/*  Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'nav-scroll' : ''}`}>
        <div className="container">

          {/*  Logo */}
          <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
            <img src={logo} alt="logo" />
            <img src={wahmyBrand} alt="brand" />
          </NavLink>

          {/*  Toggle (FIXED) */}
          <button
            className="navbar-toggler custom-toggler"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/*  Menu */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto text-center">

              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={closeMenu}>
                  الرئيسية
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/menu" onClick={closeMenu}>
                  قائمة الطعام
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={closeMenu}>
                  اتصل بنا
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={closeMenu}>
                  من نحن
                </NavLink>
              </li>

            </ul>

            {/*  Cart */}
            <button
              className="cart-icon-btn"
              onClick={() => {
                closeMenu();
                setCartOpen(true);
              }}
            >
              السلة 🛒
              {getTotalItems() > 0 && (
                <span className="cart-badge">{getTotalItems()}</span>
              )}
            </button>

          </div>
        </div>
      </nav>

      {/*  IMPORTANT */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <OrderConfirmModal />
      <ToastMessage />
    </>
  );
}