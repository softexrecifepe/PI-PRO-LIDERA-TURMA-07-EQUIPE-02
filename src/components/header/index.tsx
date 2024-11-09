"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../src/assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Switch } from "../ui/switch";
import { TbAccessible } from "react-icons/tb";
import { useSession } from "next-auth/react";

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = useSession();

  return (
    <header className="w-full fixed top-0 bg-[var(--background-color)] shadow-md z-20">
      <nav className="flex items-center justify-between h-16 max-w-[1240px] mx-auto px-4">
        <div className="flex items-center text-[#4d4d4d]">
          <Image
            className="w-[8vh] h-[8vh] max-sm:w-[5vh] max-sm:h-[5vh]"
            src={logo}
            alt="logo"
          />
          <h1 className="text-[var(--primary-color)] text-lg font-bold max-sm:text-sm ml-2">
            PRO Lidera Skills
          </h1>
        </div>
        <ul
          className={`flex items-center list-none gap-8 max-sm:flex-col max-sm:absolute max-sm:bg-[var(--background-color)] max-sm:w-full max-sm:top-16 max-sm:left-0 max-sm:z-10 max-sm:shadow-md transition-all duration-300 ${isMenuOpen ? "block" : "hidden"
            } sm:flex`}
        >
          <li>
            <a
              href="/"
              className="text-[var(--text-color)] hover:text-primary text-base transition-colors duration-200 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="text-[var(--text-color)] hover:text-primary text-base transition-colors duration-200 ease-in-out"
            >
              Quem somos
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="text-[var(--text-color)] hover:text-primary text-base transition-colors duration-200 ease-in-out"
            >
              Contato
            </a>
          </li>

          {session?.user && (
            <li>
              <a
                className="text-[var(--text-color)] hover:text-primary text-base transition-colors duration-200 ease-in-out"
              >
                {session?.user?.name}
              </a>
            </li>)}

          < li className="flex items-center gap-1">
            <Switch
              id="airplane-mode"
              onClick={() => setIsActive(!isActive)}
              className={`peer inline-flex ${isActive ? "bg-primary" : "bg-textColor border-textColor"
                }`}
            />
            <span className="font-bold">Acessibilidade</span>
            <TbAccessible />
          </li>
        </ul>
        <aside className="sm:hidden">
          <RxHamburgerMenu
            className="cursor-pointer text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </aside>
      </nav>
    </header >
  );
}
