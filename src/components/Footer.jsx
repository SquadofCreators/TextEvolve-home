import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [ ];

  return (
    <footer className="px-6 py-6 bg-gray-100 text-gray-600 text-sm border-t border-gray-200">
      {" "}
      {/* Light background */}
      <div className="container mx-auto text-center">
        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-xl text-gray-500 hover:text-orange-600 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}

        {/* Logo */}
        <div className="mb-4">
          <img src={Logo} alt="TextEvolve Logo" className="h-16 mx-auto" />{" "}
          {/* Centered logo */}
        </div>

        {/* Footer Links */}
        <div className="mb-4 space-x-4">
          <Link to="/privacy-policy" className="hover:text-orange-600 transition-colors">
            Privacy Policy
          </Link>
          <span className="text-gray-400">|</span>
          <Link to="/terms-of-service" className="hover:text-orange-600 transition-colors">
            Terms of Service
          </Link>
        </div>

        {/* Copyright */}
        <p className="mb-2 text-gray-700">
          &copy; {currentYear} TextEvolve. All rights reserved.
        </p>

        {/* Attribution */}
        <p className="text-xs text-gray-500">
          A Project by Team Dynamic Dreamers.
        </p>
      </div>
    </footer>
  );
}

export default Footer;