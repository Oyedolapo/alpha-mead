// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              <span className="text-xl font-bold">AMREP</span>
            </div>
            <p className="text-gray-400 text-sm">
              Alpha Mead Real Estate Partners - Turning land, capital and governance into enduring places across Africa.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-green-600">About Us</Link></li>
              <li><Link to="/services" className="hover:text-green-600">Services</Link></li>
              <li><Link to="/projects" className="hover:text-green-600">Projects</Link></li>
              <li><Link to="/careers" className="hover:text-green-600">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
              <li><Link to="/insights" className="hover:text-green-600">Insights</Link></li>
              <li><a href="#" className="hover:text-green-600">LinkedIn</a></li>
              <li><a href="#" className="hover:text-green-600">Twitter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400 text-sm">
              <p>No. 6, Mobolaji Johnson Avenue</p>
              <p>Ikoyi, Lagos State, Nigeria</p>
              <p className="mt-2">Hotline: 0700 ALPHA MEAD</p>
              <p>Phone: +234-701-9999-343</p>
              <p>Email: info@alphamead.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Alpha Mead Real Estate Partners (AMREP). RC-1445251. Incorporated Oct 13, 2017. ISO-certified. IFC EDGE compliance pioneer in Africa. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-green-600">Privacy Policy</Link>
            {' | '}
            <span>Information on this website is for general purposes and does not constitute an investment offer.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;