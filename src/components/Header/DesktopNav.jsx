import { menuItems } from "../../constants/data";
import NavDropdown from "./NavDropdown";
import Logo from "../../assets/logo.png";

const DesktopNav = ({ setIsSearchOpen }) => {
  return (
    <nav className="hidden lg:block">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex items-center justify-between py-2">
          <a href="/" aria-label="Home">
            <img src={Logo} alt="Alpha Mead Group" className="h-20" />
          </a>

          <ul className="flex space-x-6 uppercase font-medium text-gray-700 text-[15px]">
            {menuItems.map((item, i) => (
              <li key={i} className="relative group">
                <a
                  href={item.href || "#"}
                  className="flex items-center hover:text-green-600 transition"
                >
                  {item.name}
                  {item.dropdown && (
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
                {item.dropdown && <NavDropdown dropdown={item.dropdown} />}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-end space-x-4 py-1">
          <button
            className="text-gray-600 hover:text-green-600"
            onClick={() => setIsSearchOpen(true)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
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
    </nav>
  );
};

export default DesktopNav;
