import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export function Footer() {
  return (
    <footer className="flex flex-col bg-white p-8"> {/* Adaptei para Tailwind classes */}
      <div id="footer">
        <h2 className="text-2xl font-bold mb-6">Contato</h2>
        <div className="flex gap-8 justify-around items-center">
          <div className="flex items-center justify-center gap-2">
            <FaWhatsapp className="text-2xl"/>
            <p>
              <a href="tel:+1234567890" className="text-gray-700">+55 81 xxxxx-xxxx</a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MdOutlineEmail className="text-2xl"/>
            <p>
              <a href="mailto:info@example.com" className="text-gray-700">info@example.com</a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CiLocationOn className="text-2xl"/>
            <p className="text-gray-700">Recife</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
