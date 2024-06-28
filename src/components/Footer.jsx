import React from "react";
import Logo from "../assets/techlogo.png";
import { Link } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://trashtech.netlify.app/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
                className="hover:underline me-4 md:me-6 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="features"
                spy={true}
                smooth={true}
                duration={1000}
                className="hover:underline me-4 md:me-6 cursor-pointer"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="team"
                spy={true}
                smooth={true}
                duration={1000}
                className="hover:underline me-4 md:me-6 cursor-pointer"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                className="hover:underline cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © {currentYear}{" "}
          <a href="https://trashtech.netlify.app/" className="hover:underline">
            TrashTech™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
