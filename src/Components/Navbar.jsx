import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { headerLogo } from "../assets1/images";
import { hamburger } from "../assets1/icons";
import { NavLinks } from "../Constants/index.js";
import { useAuthStore } from "../Components/Store/AuthStore";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="padding-x py-8 w-full fixed z-20 bg-slate-800">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={39} />
        </a>
        {/* NavLinks for large screens */}
        <ul className="hidden lg:flex lg:text-sm lg:gap-5 flex-1 justify-center items-center gap-16">
          {NavLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg font-bold text-slate-400 hover:text-slate-300"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="font-montserrat text-lg font-bold text-slate-400 hover:text-slate-300"
            >
              Logout
            </button>
          </li>
        </ul>
        {/* Hamburger icon for small screens */}
        <div className="lg:hidden block" onClick={toggleNav}>
          <img src={hamburger} alt="Hamburger" width={35} height={35} />
        </div>
        {/* NavLinks for small screens */}
        {isNavOpen && (
          <ul className="lg:hidden fixed inset-0 gap-5 right-0 w-2/3 bg-white p-4 flex flex-col items-start shadow-lg z-50 pt-20 font-bold">
            {NavLinks.map((item, index) => (
              <li key={index} className="w-full mb-2">
                <a
                  href={item.href}
                  className="font-montserrat leading-normal font-bold text-slate-400 hover:text-slate-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="w-full mt-4">
              <button
                onClick={handleLogout}
                className="font-montserrat font-bold text-slate-400 hover:text-slate-300"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
