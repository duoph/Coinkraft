import React from "react";
import Logo from "../assets/logo.svg";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary flex items-center justify-center text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div>
            <img src={Logo} alt="" className="w-56" />
            <p className="pt-6">
              Coinkraft pioneers crypto branding with tailored graphics,
              collaborating with industry leaders for standout digital
              identities.
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">Menu</h4>
            <ul className="flex flex-col items-center justify-center gap-3">
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About Us</li>
              <li>Faq</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-lg font-semibold mb-4">Drop a Hi!</h4>
            <a href="mailto:hello@coinkraft.xyz">hello@coinkraft.xyz</a>
            <br />
            <a href="mailto:cjoliana07@gmail.com">cjoliana07@gmail.com</a>
          </div>
          {/* Column 4 */}
          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>

            <div className="flex items-center justify-center">
              <a href="https://x.com/coinkraftx">
                {" "}
                <FaSquareXTwitter size={40} className="text-[#915EFF]" />
              </a>
              <a href="https://t.me/joliana07">
                <FaTelegram size={40} className="text-[#915EFF]" />
              </a>
            </div>
            {/* <FaInstagramSquare size={40} className="text-[#915EFF]" />
            <IoLogoDiscord size={40} className="text-[#915EFF]" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
