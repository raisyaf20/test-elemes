"use client";

import Link from "next/link";
import logo from "../assets/imgs/logo.png";
import Image from "next/image";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [hamburger, setHamburger] = useState<Boolean>(false);

  return (
    <header>
      <div className="container mx-auto">
        <div className="flex h-24 items-center flex-wrap justify-between">
          <div className="self-center px-6">
            <Link href={"/#"}>
              <Image src={logo} alt="Logo" height="130" width="120" />
            </Link>
          </div>
          <nav
            className={`${
              hamburger ? "scale-100" : "scale-0"
            } bg-white/75 backdrop-blur-sm md:bg-transparent transition duration-500 p-4 md:p-0 absolute top-20 z-50 md:h-auto right-0 left-0 md:static md:scale-100 md:block`}
          >
            <ul className="text-dark text-lg md:text-sm flex flex-col items-center md:flex-row gap-5 md:text-secondary">
              <li>
                <Link href={"/#"}>Home</Link>
              </li>
              <li>
                <Link href={"#"}>About</Link>
              </li>
              <li>
                <Link href={"#"}>Promotion</Link>
              </li>
              <li>
                <Link href={"#"}>Blogs</Link>
              </li>
              <li>
                <Link href={"#"}>Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div>
            <button className="mr-4 text-dark text-[17px] font-medium">
              Login
            </button>
            <button className="w-[147px] h-[42px] rounded-full bg-primary text-white">
              Register Now
            </button>
            <div className="flex gap-3 h-20 md:hidden fixed items-center bg-white/50 z-50 backdrop-blur-sm justify-around bottom-0 right-0 left-0">
              <button className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 6l16 0"></path>
                  <path d="M4 12l16 0"></path>
                  <path d="M4 18l16 0"></path>
                </svg>{" "}
                Home
              </button>
              <button className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 6l16 0"></path>
                  <path d="M4 12l16 0"></path>
                  <path d="M4 18l16 0"></path>
                </svg>{" "}
                Promotion
              </button>
              <button
                className="flex flex-col items-center"
                onClick={() => setHamburger(!hamburger)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 6l16 0"></path>
                  <path d="M4 12l16 0"></path>
                  <path d="M4 18l16 0"></path>
                </svg>{" "}
                Other
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
