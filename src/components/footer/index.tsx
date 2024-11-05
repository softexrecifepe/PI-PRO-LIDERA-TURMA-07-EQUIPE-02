"use client";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export function Footer() {
  return (
    <footer className="flex flex-col bg-white pt-6 pl-6 h-28 max-sm:h-1/2">
      <div id="footer">
        <h2 className="text-xl font-bold max-sm:hidden">Contato</h2>
        <div className="flex gap-8 justify-around items-center max-sm:mb-4">
          <div className="flex items-center justify-center gap-2 max-sm:cursor-pointer">
            <FaWhatsapp className="text-xl max-sm:size-8 max-sm:bg-slate-200 max-sm:border-2 border-black max-sm:rounded max-sm:p-1" />
            <p>
            <a href="https://wa.me/+1234567890" className="text-gray-700 max-sm:hidden ">
                +55 81 xxxxx-xxxx
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 max-sm:cursor-pointer">
            <MdOutlineEmail className="text-xl max-sm:size-8 max-sm:bg-slate-200  max-sm:border-2 border-black max-sm:rounded max-sm:p-1" />
            <p>
              <a
                href="mailto:info@example.com"
                className="text-gray-700 max-sm:hidden"
              >
                info@example.com
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 max-sm:cursor-pointer">
            <CiLocationOn className="text-xl max-sm:size-8 max-sm:bg-slate-200 max-sm:border-2 border-black max-sm:rounded max-sm:p-1" />
            <p className="text-gray-700 max-sm:hidden">Recife</p>
          </div>
        </div>
      </div>
      <hr />
      <small className="flex justify-center items-center gap-8 text-gray-700 mt-2 max-sm:hidden">
        Copyright © 2024 PRO Lidera Skills | Todos os direitos reservados
      </small>
    </footer>
  );
}
