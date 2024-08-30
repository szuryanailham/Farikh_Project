import React, { useEffect, useRef, useState } from "react";
import { logo } from "../assets/Utils";
import { navLinks } from "../constants";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef(null);
  const sidebarRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && navRef.current && !sidebarRef.current.contains(event.target) && !navRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isActive]);

  return (
    <>
      <nav ref={navRef} className="shadow-2xl bg-baseColor fixed w-full">
        <div className="max-w-screen-xl max-h-min flex flex-wrap items-center justify-between mx-auto py-4 px-7 font-Trap z-[100">
          {/* logo brand */}
          <a href="#home" className="cursor-pointer">
            <img src={logo} className="w-12" alt="Farikh logo" />
          </a>

          {/* item menu */}
          <ul className="hidden md:flex flex-row justify-center space-x-12 font-semibold p-3">
            {navLinks.map((item, id) => (
              <li key={id}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
          {/* Email address */}
          <h3 className="hidden md:block font-Trap font-bold">User@gmail.com</h3>

          {/* BurgerMenu */}
          <div
            onClick={() => {
              setIsActive((prev) => !prev);
            }}
            className="md:hidden text-4xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250"
          >
            {isActive ? <IoMdClose /> : <CgMenuRightAlt />}
          </div>
        </div>
      </nav>
      {/* ========== SIDEBAR =====  */}
      <div
        ref={sidebarRef}
        className={`${isActive ? "translate-y-0" : "-translate-y-full"} font-Trap fixed top-0 left-0 w-full h-fit bg-baseColor flex flex-col p-2 py-3 md:hidden transition-transform duration-300 ease-in-out z-50 shadow-2xl`}
      >
        <ul className="font-semibold px-6 mt-3 divide-y divide-slate-200">
          {navLinks.map((item, id) => (
            <li key={id} className="py-5">
              <a href={`${item.id}`} onClick={() => setIsActive(false)} className="hover:text-blue-500">
                {item.title}
              </a>
            </li>
          ))}
          <li className="py-5">
            <a href="#asas" onClick={() => setIsActive(false)}>
              User@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
