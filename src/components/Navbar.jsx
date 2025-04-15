import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollTo } from 'react-scroll';

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
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className={`text-2xl font-extrabold tracking-wider transition-colors duration-300 ${isScrolled ? 'text-orange-600' : 'text-gray-800 md:text-orange-600'}`}> {/* Adjust initial color if hero bg is light */}

            <img src={Logo} alt="TextEvolve Logo" className="h-10 inline-block mr-2" /> 

            <span className={`hidden md:inline-block ${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}>
              Text<span className="text-orange-600">Evolve</span>
            </span>
          </a>

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

        {/* Mobile Menu (light theme) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200"
              variants={mobileMenuVariants} 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            >
              <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50" onClick={() => setIsMobileMenuOpen(false)} >
                    {link.text}
                  </a>
                ))}
                <a href="http://www.textevolve.in" target="_blank" rel="noopener noreferrer" className="block w-full text-center mt-2 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md transition duration-300 text-base font-medium shadow-sm" onClick={() => setIsMobileMenuOpen(false)} >
                  Explore
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;