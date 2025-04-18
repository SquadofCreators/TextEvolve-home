import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollTo } from 'react-scroll';
import { Link } from 'react-router-dom'; 

import Logo from '../assets/logo.svg'; 

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', text: 'Features' },
    { href: '#how-it-works', text: 'How it Works' },
    { href: '#results', text: 'Results' },
    { href: '#roadmap', text: 'Roadmap' },
    { href: '#team', text: 'Team' },
    // { href: '#resources', text: 'Resources' },
  ];

  const mobileMenuVariants = { 
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  }; 

  return (
    <nav className={`fixed top-0 z-50 md:px-6 w-full transition-all duration-300 select-none ${isScrolled ? 'p-1' : 'bg-transparent'}`}>
      <div className={`container mx-auto px-4 py-2 ${isScrolled ? "border bg-white border-gray-300 rounded-lg shadow-xl" : "py-4"}`}>
        <div className="flex justify-between items-center">
          <Link to="/" className={`flex items-center ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            {/* Logo and Brand Name */}
            <img src={Logo} alt="TextEvolve Logo" className="h-7 inline-block mr-2" />

            <span className={`inline-block font-bold text-xl text-gray-800 tracking-wide`}>
              Text<span className="text-orange-600">Evolve</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <ScrollTo
                to={link.href.replace('#', '')} 
                key={link.href}
                className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${isScrolled ? 'text-gray-600 hover:text-orange-600' : 'text-gray-700 hover:text-orange-500'}`} // Adjust initial color
              >
                {link.text}
              </ScrollTo>
            ))}

            <ScrollTo
              to="contact"
              className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 ml-6 rounded-md transition-colors duration-300 text-sm font-medium shadow-sm cursor-pointer"
            >
              Contact Us
            </ScrollTo>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-1 rounded focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-gray-800 hover:text-orange-500'}`} // Adjust initial color
              aria-label="Toggle mobile menu" aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> // Close
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg> // Hamburger
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full z-50 p-1"
              variants={mobileMenuVariants} 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            >
              <div className="w-full  flex flex-col p-4 gap-5 border bg-white border-gray-300 rounded-lg shadow-xl">
                {navLinks.map((link) => (
                  <ScrollTo
                    to={link.href.replace('#', '')} 
                    key={link.href}
                    className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${isScrolled ? 'text-gray-600 hover:text-orange-600' : 'text-gray-700 hover:text-orange-500'}`} // Adjust initial color
                    onClick={toggleMobileMenu} 
                  >
                    {link.text}
                  </ScrollTo>
                ))}
                <ScrollTo
                  to="contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white text-center py-2 px-5 mt-3 rounded-md transition-colors duration-300 text-sm font-medium shadow-sm cursor-pointer"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </ScrollTo>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;