import React from "react";
import { headerLogo } from "../assets1/images";
import { hamburger } from "../assets1/icons";
import { NavLinks } from "../Constants/index.js";

const Navbar = () => {
  return (
    <header className="padding-x py-8 w-full absolute z-10">
      <nav className="flex justify-between items-center max-container">
        <a>
          <img src={headerLogo} alt="Logo" width={130} height={39} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16">
          {NavLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray max-lg:hidden"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Harmburger" width={35} height={35} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
