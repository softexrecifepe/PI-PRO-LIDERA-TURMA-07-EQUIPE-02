import React from "react";
import Image from "next/image";
import logo from "../../../src/assets/images/logo.png";

import { Switch } from "../ui/switch";
import { TbAccessible } from "react-icons/tb";

export function Header() {
  return (
    <header className="w-full fixed top-0 bg-[var(--background-color)] shadow-md z-10">
      <nav className="flex items-center justify-between h-16 max-w-[1240px] mx-auto px-4">
        <div className="flex items-center text-[#4d4d4d]">
          <Image className="w-[15vh] h-[15vh]" src={logo} alt="logo" />
          <h1 className="text-[var(--primary-color)] text-lg font-bold">
            PRO Lidera Skills
          </h1>
        </div>
        <ul className="flex items-center list-none gap-4">
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
          <div className="flex items-center gap-1">
            <Switch id="airplane-mode" className="bg-primary     " />
            <span className="font-bold">Acessibilidade</span>
            <TbAccessible />
          </div>
        </ul>
      </nav>
    </header>
  );
}
