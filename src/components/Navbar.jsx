// components/Header.js
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { IoCart } from "react-icons/io5";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const toggleMobileDropdown = (index) =>
    setActiveMobileDropdown((prev) => (prev === index ? null : index));

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Our Services",
      href: "#",
      dropdown: {
        businesses: [
          { name: "Facilities Management (AMF)", href: "/facilities" },
          { name: "Training services (AMTC)", href: "/development" },
          { name: "Real Estate Development (AMDC)", href: "/healthcare" },
          { name: "Power Solutions", href: "https://alphameadpartners.com/" },
          { name: "Property Technology Solutions (PropTech)", href: "https://alphameadtraining.com/" },
          { name: "Healthcare", href: "/bridge-financing" },
        ]
      },
    },
    {
      name: "Int'l Business",
      href: "#",
      dropdown: {
        businesses: [
          { name: "Ghana", href: "/facilities" },
          { name: "Cameroon", href: "/development" },
          { name: "Senegal", href: "/healthcare" },
          { name: "South Africa", href: "/healthcare" },
          { name: "Kenya", href: "/healthcare" },
          { name: "Guinea Conakry", href: "/healthcare" },
          { name: "Rwanda", href: "/healthcare" },
          { name: "Côte d'Ivoire", href: "/healthcare" },
          { name: "Ethiopia", href: "/healthcare" },
          { name: "Tanzania", href: "/healthcare" },
          { name: "Botswana", href: "/healthcare" },
          { name: "UAE", href: "/healthcare" },
          { name: "Benin Republic", href: "/healthcare" },
        ],
      },
    },
    {
      name: "Media & Events",
      href: "#",
      dropdown: {
        businesses: [
          { name: "Corporate News", href: "/events" },
          { name: "Corporate Events", href: "/events" },
          { name: "Blos", href: "/events" },
          { name: "Scanned News Publications", href: "/media" },
        ],
      },
    },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="border-t-[10px] border-[#7CFC00] bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      {/* Mobile header (logo + hamburger) */}
      <div className="lg:hidden py-3 px-4 flex justify-between items-center">
        <a href="/" onClick={closeMobileMenu}>
          <img src={Logo} alt="Alpha Mead Group" className="h-16" />
        </a>

        <button
          onClick={() => {
            setIsMobileMenuOpen((v) => !v);
            if (isMobileMenuOpen) setActiveMobileDropdown(null);
          }}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          className="text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop navigation + buttons (structure preserved: nav first, then buttons row) */}
      <nav className="hidden lg:block">
        <div className="container mx-auto px-4">
          {/* Top row: logo + nav */}
          <div className="flex items-center justify-between py-3">
            <div className="flex-shrink-0">
              <a href="/" aria-label="Home">
                <img src={Logo} alt="Alpha Mead Group logo" className="h-24" />
              </a>
            </div>

            <ul className="flex space-x-8 uppercase font-medium text-gray-700">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={item.href || "#"}
                    className="flex items-center hover:text-green-600 transition"
                    aria-haspopup={item.dropdown ? "true" : undefined}
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>

                  {/* Desktop dropdown (hover) */}
                  {item.dropdown && (
                    <div className="absolute left-0 top-full min-w-[300px] bg-white shadow-lg rounded mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 ease-out z-50">
                      <div className="p-4 grid grid-cols-1">
                        {/* Businesses */}
                        {item.dropdown.businesses && (
                          <div>
                            <ul>
                              {item.dropdown.businesses.map((biz, i) => (
                                <li key={i}>
                                  <a
                                    href={biz.href}
                                    target={biz.href.startsWith("http") ? "_blank" : "_self"}
                                    rel={biz.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="block py-1 px-2 text-base text-gray-700 hover:bg-green-50 hover:text-green-700 rounded"
                                  >
                                    {biz.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Second row: header buttons (under nav) */}
          <div className="flex items-center justify-end space-x-4 py-3">
            <button className="text-gray-600 hover:text-green-600" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button className="text-gray-600 hover:text-green-600" aria-label="Cart">
              <IoCart fontSize={24} />
            </button>

            <button className="bg-blue-400 text-white px-6 py-2 rounded text-sm uppercase font-semibold hover:bg-sky-600 transition">
              Download Brochure
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu (no border-top on mobile as requested) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg"> {/* border-top removed */}
          <div className="px-4 py-4 space-y-3">
            <ul className="space-y-2 uppercase font-medium text-sm">
              {menuItems.map((item, index) => {
                const hasDropdown = !!item.dropdown;
                return (
                  <li key={index}>
                    {/* If dropdown: render a toggle button; otherwise render a link that closes menu */}
                    {hasDropdown ? (
                      <>
                        <button
                          onClick={() => toggleMobileDropdown(index)}
                          aria-expanded={activeMobileDropdown === index}
                          className="w-full flex gap-x-2 items-center text-left px-2 py-2 hover:text-green-600 uppercase"
                        >
                          <span>{item.name}</span>
                          <svg
                            className={`w-4 h-4 transform transition-transform ${activeMobileDropdown === index ? "rotate-180" : ""
                              }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Collapsible content */}
                        {activeMobileDropdown === index && (
                          <div className="pl-4 pt-2 pb-2">
                            {/* businesses */}
                            {item.dropdown.businesses && (
                              <div className="mb-2">
                                <ul className="space-y-1 uppercase">
                                  {item.dropdown.businesses.map((biz, i) => (
                                    <li key={i}>
                                      <a
                                        href={biz.href}
                                        onClick={() => closeMobileMenu()}
                                        className="block py-1 text-gray-700 hover:text-green-600"
                                        target={biz.href.startsWith("http") ? "_blank" : "_self"}
                                        rel={biz.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                      >
                                        {biz.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => closeMobileMenu()}
                        className="block px-2 py-2 text-gray-700 hover:text-green-600"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile header buttons (under the menu items) */}
            <div className="flex items-center space-x-4 pt-3">
              <button className="text-gray-600 hover:text-green-600" aria-label="Search (mobile)">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button className="text-gray-600 hover:text-green-600" aria-label="Cart (mobile)">
                <IoCart fontSize={24} />
              </button>

              <button className="bg-blue-500 text-white px-5 py-2 rounded text-sm uppercase font-semibold hover:bg-blue-600 transition">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
