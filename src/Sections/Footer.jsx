import React from "react";
import { footerLogo } from "../assets1/images";
import { socialMedia, footerLinks } from "../Constants";
import { copyrightSign } from "../assets1/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap sm:flex-col">
        {/* Left section: logo, description, social media */}
        <div className="flex max-lg:flex-col items-start">
          <div className="flex flex-col">
            <a href="/">
              <img
                src={footerLogo}
                alt="footer logo"
                width={124}
                height={40}
                className="object-contain"
              />
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              your perfect size in store. Get rewards.
            </p>

            {/* Social media icons */}
            <div className="flex items-center gap-5 mt-8 text-white">
              {socialMedia.map((icon) => (
                <div
                  key={icon.src}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:scale-125 transition-transform duration-300"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer navigation links */}
          <div className="flex flex-1 max-lg:flex justify-between lg:gap-10 gap-10 flex-wrap ml-10 max-lg:ml-0">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6 mt-10">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-3 text-white leading-normal font-montserrat text-base hover:text-slate-300 cursor-pointer"
                    >
                      <a href={link.link || "#"}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex justify-between text-white sm:flex-col items-center mt-10 w-full border-t border-white/20 pt-6">
          <div className="flex items-center gap-2 font-montserrat text-sm">
            <img
              src={copyrightSign}
              alt="copyright sign"
              width={20}
              height={20}
              className="rounded-full"
            />
            <p>Copyright. All rights reserved. Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
