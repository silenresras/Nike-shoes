import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { headerLogo } from "../assets1/images";
import { hamburger } from "../assets1/icons";
import { NavLinks } from "../Constants/index.js";
import { useAuthStore } from "../Components/Store/AuthStore";
import Button from "../Components/Button";
import CartIcon from "../Components/CartIcon";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const navRef = useRef(null);
  const menuRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !navRef.current.contains(event.target)
      ) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <nav ref={navRef} className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={39} />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex lg:text-sm lg:gap-5 flex-1 justify-center items-center gap-10">
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
        </ul>

        {/* Right side actions for desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <CartIcon />
          {isAuthenticated ? (
            <Button label="Logout" onClick={handleLogout} textColor="text-white" />
          ) : (
            <>
              <Button
                label="Login"
                onClick={() => navigate("/login")}
                textColor="text-white"
              />
              <Button
                label="Signup"
                onClick={() => navigate("/signup")}
                textColor="text-white"
              />
            </>
          )}
        </div>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden block" onClick={toggleNav}>
          <img src={hamburger} alt="Hamburger" width={35} height={35} />
        </div>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <div
            ref={menuRef}
            className="lg:hidden fixed inset-0 right-0 w-2/3 bg-white p-4 flex flex-col items-start shadow-lg z-50 pt-20 font-bold"
          >
            <button
              onClick={toggleNav}
              className="text-xl text-coral-red hover:text-red-600 font-bold mb-4 self-end w-5 h-5"
            >
              ×
            </button>

            <ul className="w-full space-y-4">
              {NavLinks.map((item, index) => (
                <li key={index} className="list-none">
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal font-bold text-slate-400 hover:text-slate-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* Cart icon in mobile menu */}
              <li className="list-none">
                <CartIcon iconColor="text-black" badgeColor="bg-red-600" />
              </li>

              {/* Auth buttons */}
              <li className="w-full mt-4 list-none">
                {isAuthenticated ? (
                  <Button label="Logout" onClick={handleLogout} textColor="text-white" />
                ) : (
                  <div className="space-y-4">
                    <Button
                      label="Login"
                      onClick={() => navigate("/login")}
                      textColor="text-white"
                    />
                    <Button
                      label="Signup"
                      onClick={() => navigate("/signup")}
                      textColor="text-white"
                    />
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
