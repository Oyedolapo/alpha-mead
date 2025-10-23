// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full"></div>
            <span className="text-xl font-bold text-black">AMREP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-black hover:text-green-600 font-medium">Home</Link>
            <Link to="/about" className="text-black hover:text-green-600 font-medium">About</Link>
            <Link to="/services" className="text-black hover:text-green-600 font-medium">Services</Link>
            <Link to="/projects" className="text-black hover:text-green-600 font-medium">Projects</Link>
            <Link to="/sustainability" className="text-black hover:text-green-600 font-medium">Sustainability</Link>
            <Link to="/insights" className="text-black hover:text-green-600 font-medium">Insights</Link>
            <Link to="/contact" className="text-black hover:text-green-600 font-medium">Contact</Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-black hover:text-green-600 font-medium">Home</Link>
              <Link to="/about" className="text-black hover:text-green-600 font-medium">About</Link>
              <Link to="/services" className="text-black hover:text-green-600 font-medium">Services</Link>
              <Link to="/projects" className="text-black hover:text-green-600 font-medium">Projects</Link>
              <Link to="/sustainability" className="text-black hover:text-green-600 font-medium">Sustainability</Link>
              <Link to="/insights" className="text-black hover:text-green-600 font-medium">Insights</Link>
              <Link to="/contact" className="text-black hover:text-green-600 font-medium">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;