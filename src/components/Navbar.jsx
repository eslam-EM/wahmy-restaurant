
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/brandLogo.png';
import wahmyBrand from '../assets/wahmyBrand.png';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import OrderConfirmModal from './OrderConfirmModal';
import ToastMessage from './ToastMessage';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State للتحكم في فتح وإغلاق القائمة

  const { getTotalItems } = useCart();

  // دالة لإغلاق القائمة
  const closeMenu = () => {
    setIsMenuOpen(false);
    // إزالة class الـ 'show' من عنصر الـ collapse يدوياً لتجنب أي تعارض مع Bootstrap
    const collapseElement = document.getElementById('navbarSupportedContent');
    if (collapseElement) {
      collapseElement.classList.remove('show');
    }
  };

  // دالة لتبديل حالة القائمة
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      setScrollProgress(scrolledPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          scrolled ? 'nav-scroll' : ''
        }`}
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
            <img src={logo} alt="logo" />
            <img src={wahmyBrand} alt="brand" />
          </NavLink>

          <button
            className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
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

            <button
              className="cart-icon-btn"
              onClick={() => {
                closeMenu(); // إغلاق القائمة عند فتح السلة
                setCartOpen(true);
              }}
            >
              السلة 🛒
              {getTotalItems() > 0 && (
                <span className="cart-badge">{getTotalItems()}</span>
              )}

            <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
            <OrderConfirmModal />
            <ToastMessage /> 
            
            </button>
          </div>
        </div>
      </nav>

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <OrderConfirmModal />
    </>
  );
}