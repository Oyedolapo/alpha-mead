import React from "react";

const NavDropdown = ({ dropdown }) => (
  <div className="absolute left-0 top-full min-w-[280px] bg-white shadow-lg rounded mt-1
    opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
    transition-all duration-200 ease-out z-50">
    <div className="p-3 grid grid-cols-1">
      {dropdown.businesses && (
        <ul>
          {dropdown.businesses.map((biz, i) => (
            <li key={i}>
              <a
                href={biz.href}
                target={biz.href.startsWith("http") ? "_blank" : "_self"}
                rel={biz.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block py-1 px-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded"
              >
                {biz.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default NavDropdown;
