import { menuItems } from "../../constants/data";
import NavDropdown from "./NavDropdown";
import Logo from "../../assets/logo.png";
import { RxCaretDown } from "react-icons/rx";
import { MdOutlineSearch } from "react-icons/md";

const DesktopNav = ({ setIsSearchOpen }) => {
  return (
    <nav className="hidden lg:block">
      <div className="container mx-auto px-14">
        {/* Top Row */}
        <div className="flex items-center justify-between py-2">
          <a href="/" aria-label="Home">
            <img src={Logo} alt="Alpha Mead Group" className="h-16" />
          </a>

          <ul className="flex space-x-4 uppercase font-medium text-gray-700 text-xs">
            {menuItems.map((item, i) => (
              <li key={i} className="relative group">
                <a
                  href={item.href || "#"}
                  className="flex items-center hover:text-green-600 transition"
                >
                  {item.name}
                  {item.dropdown && (
                    <RxCaretDown className="ml-1 w-4 h-4"/>
                  )}
                </a>
                {item.dropdown && <NavDropdown dropdown={item.dropdown} />}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-end space-x-4 py-1 -mt-4 mb-5">
          <button
            className="text-gray-600 hover:text-green-600"
            onClick={() => setIsSearchOpen(true)}
          >
            <MdOutlineSearch className="w-6 h-6"/>
          </button>

          <a
            href="../../brochure.pdf"
            download
            className="bg-blue-500 text-white px-5 py-2 rounded text-xs uppercase font-semibold hover:bg-blue-600 transition"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
