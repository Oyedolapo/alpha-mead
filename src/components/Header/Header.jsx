import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SearchModal from "./SearchModal";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="border-t-[10px] border-[#7CFC00] bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      {/* Desktop Nav */}
      <DesktopNav setIsSearchOpen={setIsSearchOpen} />

      {/* Mobile Nav */}
      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      {/* Search Modal */}
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </header>
  );
};

export default Header;
