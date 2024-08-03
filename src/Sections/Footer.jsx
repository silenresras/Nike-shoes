import React from "react";
import { footerLogo } from "../assets1/images";
import { socialMedia, footerLinks } from "../Constants";
import { copyrightSign } from "../assets1/icons";
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap sm:flex-col">
        <div className="flex sm:flex-col sm:items-start items-center">
          <a href="/">
            <img
              src={footerLogo}
              alt="footer logo"
              width={124}
              height={40}
              className="object-contain"
            />
          </a>
          <p className=" mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size in Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8 text-white rounded-full">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  key={icon.src}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
            {footerLinks.map((section) => (
              <div key={section}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6 mt-10">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className="mt-3 text-white-400 leading-normal font-montserrat text-base hover:text-slate-gray cursor-pointer"
                      key={link.name}
                    >
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-white-400 sm:flex-col sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt="copy right sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-monserrat">Terms & conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
