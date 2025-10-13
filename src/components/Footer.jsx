// components/Footer.js
import React from 'react';
import footerLogo from '../assets/footerLogo.png';
import ISOImage from '../assets/ISO_LOGO_WHITE.png';
import awardImage from '../assets/award.png';
import { footerLinks, socialLinks } from '../constants/data';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Logo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <img 
              src={footerLogo}
              alt="Alpha Mead Group"
              className="h-64"
            />
          </div>
          
          {/* Navigation and Content */}
          <div className="lg:col-span-8 text-center">
            {/* Navigation */}
            <nav className="mb-8">
              <ul className="flex flex-wrap justify-center gap-6">
                {footerLinks.map((link, index) => (
                  <li key={index} className='mx-4'>
                    <a 
                      href={link.href}
                      className="text-white hover:text-[#71bf4f] transition-colors text-xl lg:text-2xl font-semibold"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Policy Links */}
            <div className="mb-8">
              <a 
                href="/web-privacy-and-cookie-policy"
                className="text-[#71bf4f] hover:text-green-300 mx-4 text-xl"
              >
                WEB PRIVACY AND COOKIE POLICY
              </a>
              <span className="text-[#71bf4f]">|</span>
              <a 
                href="/terms-of-use"
                className="text-[#71bf4f] hover:text-green-300 mx-4 text-lg"
              >
                TERMS OF USE
              </a>
            </div>
            
            {/* Divider */}
            <hr className="border-green-600 mb-8" />
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors duration-200 text-3xl"
                >
                  <social.icon fontSize={50}/>
                </a>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end space-y-4">
            <img 
              src={ISOImage}
              alt="ISO Certified"
              className="h-40"
            />
            <img 
              src={awardImage}
              alt="CTIA"
              className="h-20 my-3"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
