import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  RiMenu3Fill,
  RiContactsBook2Fill,
  RiFolderInfoFill,
} from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { FaHome, FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { ImBlog } from "react-icons/im";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "../../../pages/shared/Shared.css";
import { PrimaryBtn } from "../../../components";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "About", link: "/about", icon: <RiFolderInfoFill /> },
    { title: "Project", link: "/project", icon: <MdWork /> },
    { title: "Contact", link: "/contact", icon: <RiContactsBook2Fill /> },
    { title: "Blog", link: "/blog", icon: <ImBlog /> },
  ];
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#FF651C",
    };
  };

  // Show Navbar on Scroll UP
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`visible ${show && "nav-hidden"} shadow-lg bg-[#313131] 
     z-50`}
    >
      <div className="w-full flex items-center justify-between px-3 md:px-24 py-3">
        <div>
          <Link to="/">
            <h1 className="text-2xl text-primary font-lobster">
              Tamada Ashokkumar
            </h1>
          </Link>
        </div>
        <div>
          <ul className="lg:flex items-center hidden">
            {navLinks.map((navItem) => (
              <li className="mx-4" key={navItem.title}>
                <NavLink
                  to={navItem.link}
                  style={activeLink}
                  className="text-white hover:text-primary duration-300"
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}

            <a
              className="inline-block ml-4"
              href="https://res.cloudinary.com/dkjxi2plu/image/upload/v1751199861/Screenshot_2025-06-29_175407_pyfv8m.png"
              target="blank"
            >
              <PrimaryBtn>
                <span>Resume</span>
                <span>
                  <FaDownload />
                </span>
              </PrimaryBtn>
            </a>
          </ul>
          <div className="block lg:hidden">
            <button onClick={toggleDrawer} className="btn btn-ghost text-white">
              <RiMenu3Fill></RiMenu3Fill>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              style={{ backgroundColor: "#212121" }}
              className="bla bla bla flex flex-col justify-between pb-4"
            >
              <ul className="">
                <li className="mt-6 mb-10 ml-4">
                  <GiCrossMark
                    className="cursor-pointer hover:text-primary duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                  ></GiCrossMark>
                </li>
                {navLinks.map((navItem) => (
                  <li
                    className="m-4"
                    key={navItem.title}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <NavLink
                      to={navItem.link}
                      style={activeLink}
                      className="flex items-center text-white hover:text-primary duration-300"
                    >
                      <span className="mr-3">{navItem.icon}</span>
                      <span>{navItem.title}</span>
                    </NavLink>
                  </li>
                ))}
                <li className="text-center m-4">
                  <a
                    className="inline-block w-full"
                    href="https://www.google.com/search?q=telugu+funny+meems&client=ms-android-xiaomi-terr1-rso2&sca_esv=4da7261d6af0beeb&sxsrf=AE3TifO3rGHYF9rYA23WQKKzxKxS0g1kAA%3A1751467628848&ei=bEZlaLK-M5ei1e8P8c3o6AM&oq=telugu+funny+meems&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIhJ0ZWx1Z3UgZnVubnkgbWVlbXMyBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yCRAAGIAEGAoYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDUjAFlC9CViEEnABeAGQAQCYAfMBoAG4CqoBBTAuMS41uAEDyAEA-AEBmAIHoAKNC8ICBxAjGLADGCfCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICChAjGIAEGCcYigXCAgoQABiABBhDGIoFwgIFEAAYgATCAgsQABiABBiRAhiKBZgDAIgGAZAGCZIHBTEuMC42oAexILIHAzItNrgHhQvCBwcyLTMuMi4yyAdS&sclient=mobile-gws-wiz-serp#vhid=f3UNIAqWazQS9M&vssid=_cUZlaJnALcm9vr0PspLAyQg_36"
                    target="blank"
                  >
                    <button className="primary-button w-full text-white">
                      <span>Resume</span>
                      <span>
                        <FaDownload />
                      </span>
                    </button>
                  </a>
                </li>
              </ul>
              <div className="text-center">
                <p className="text-neutral">
                  &copy; Copyright 2023, Gilbert Hutapea. All Rights Reserved
                </p>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
