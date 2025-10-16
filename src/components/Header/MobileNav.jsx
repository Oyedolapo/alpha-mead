import { useState } from "react";
import Logo from "../../assets/logo.png";
import { menuItems } from "../../constants/data";
import { IoMdClose } from "react-icons/io";
import { MdMenu, MdOutlineSearch } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";

const MobileNav = ({ isMobileMenuOpen, setIsMobileMenuOpen, setIsSearchOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) =>
    setActiveDropdown((prev) => (prev === index ? null : index));

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top row: logo + hamburger */}
      <div className="lg:hidden py-3 px-10 flex justify-between items-center bg-white shadow-sm">
        <a href="/" onClick={closeMenu}>
          <img src={Logo} alt="Alpha Mead Group" className="h-14" />
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          className="text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? (
           <IoMdClose className="w-6 h-6"/>
          ) : (
            <MdMenu className="w-6 h-6"/>
          )}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <ul className="space-y-2 uppercase font-medium text-sm">
              {menuItems.map((item, index) => {
                const hasDropdown = !!item.dropdown;
                return (
                  <li key={index}>
                    {hasDropdown ? (
                      <>
                        <button onClick={() => toggleDropdown(index)} aria-expanded={activeDropdown === index} className="w-full flex gap-x-2 items-center text-left px-2 py-2 hover:text-green-600 uppercase">
                          <span>{item.name}</span>
                          <RxCaretDown className={`w-4 h-4 transform transition-transform ${activeDropdown === index ? "rotate-180" : "" }`}/>
                        </button>

                        {activeDropdown === index && (
                          <div className="pl-4 pt-2 pb-2">
                            {item.dropdown.businesses && (
                              <ul className="space-y-1 uppercase">
                                {item.dropdown.businesses.map((biz, i) => (
                                  <li key={i}>
                                    <a href={biz.href} onClick={closeMenu}
                                      target={
                                        biz.href.startsWith("http")
                                          ? "_blank"
                                          : "_self"
                                      }
                                      rel={
                                        biz.href.startsWith("http")
                                          ? "noopener noreferrer"
                                          : undefined
                                      }
                                      className="block py-1 text-gray-700 hover:text-green-600"
                                    >
                                      {biz.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="block px-2 py-2 text-gray-700 hover:text-green-600"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile action buttons */}
            <div className="flex items-center space-x-4 pt-3">
              <button
                className="text-gray-600 hover:text-green-600"
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <MdOutlineSearch className="w-6 h-6"/>
              </button>

              <a
                href="../../brochure.pdf"
                download
                className="bg-blue-500 text-white px-5 py-2 rounded text-sm uppercase font-semibold hover:bg-blue-600 transition"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
