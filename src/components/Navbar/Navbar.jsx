import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-wrapper">
        <a href="/" className="nav-logo">
          <img src={logo} alt="Brand Logo" />
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>{item.name}</a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">Let's Talk</a>

        <button className="menu-trigger" onClick={() => setMenuOpen(true)}>
          <span></span><span></span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-nav-overlay" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <div className="mobile-nav-content">
              <button className="close-trigger" onClick={() => setMenuOpen(false)}>
                <div className="trigger-text">CLOSE</div>
                <div className="trigger-icon">✕</div>
              </button>
              
              {navItems.map((item, i) => (
                <a key={i} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}